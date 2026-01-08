import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gm")
export default class GmController {
  @operation({
    summary: "Get Gm",
  })
  @get()
  static getGm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gm",
  })
  @post("{id}")
  static createGm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
