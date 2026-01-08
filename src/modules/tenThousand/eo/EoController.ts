import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eo")
export default class EoController {
  @operation({
    summary: "Get Eo",
  })
  @get()
  static getEo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eo",
  })
  @post("{id}")
  static createEo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
