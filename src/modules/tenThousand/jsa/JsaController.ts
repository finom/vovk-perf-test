import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jsa")
export default class JsaController {
  @operation({
    summary: "Get Jsa",
  })
  @get()
  static getJsa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jsa",
  })
  @post("{id}")
  static createJsa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
