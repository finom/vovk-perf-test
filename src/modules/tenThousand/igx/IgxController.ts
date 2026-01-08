import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("igx")
export default class IgxController {
  @operation({
    summary: "Get Igx",
  })
  @get()
  static getIgx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Igx",
  })
  @post("{id}")
  static createIgx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
