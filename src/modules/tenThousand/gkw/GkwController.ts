import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gkw")
export default class GkwController {
  @operation({
    summary: "Get Gkw",
  })
  @get()
  static getGkw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gkw",
  })
  @post("{id}")
  static createGkw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
