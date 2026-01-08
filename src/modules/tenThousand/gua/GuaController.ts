import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gua")
export default class GuaController {
  @operation({
    summary: "Get Gua",
  })
  @get()
  static getGua = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gua",
  })
  @post("{id}")
  static createGua = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
