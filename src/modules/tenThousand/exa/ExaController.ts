import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("exa")
export default class ExaController {
  @operation({
    summary: "Get Exa",
  })
  @get()
  static getExa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Exa",
  })
  @post("{id}")
  static createExa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
