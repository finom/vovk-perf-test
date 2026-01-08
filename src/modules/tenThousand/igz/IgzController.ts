import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("igz")
export default class IgzController {
  @operation({
    summary: "Get Igz",
  })
  @get()
  static getIgz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Igz",
  })
  @post("{id}")
  static createIgz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
