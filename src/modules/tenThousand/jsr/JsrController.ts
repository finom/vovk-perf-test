import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jsr")
export default class JsrController {
  @operation({
    summary: "Get Jsr",
  })
  @get()
  static getJsr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jsr",
  })
  @post("{id}")
  static createJsr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
