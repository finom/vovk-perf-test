import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("igp")
export default class IgpController {
  @operation({
    summary: "Get Igp",
  })
  @get()
  static getIgp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Igp",
  })
  @post("{id}")
  static createIgp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
