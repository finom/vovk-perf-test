import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ajm")
export default class AjmController {
  @operation({
    summary: "Get Ajm",
  })
  @get()
  static getAjm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ajm",
  })
  @post("{id}")
  static createAjm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
