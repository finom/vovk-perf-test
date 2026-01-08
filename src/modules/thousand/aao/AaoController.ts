import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aao")
export default class AaoController {
  @operation({
    summary: "Get Aao",
  })
  @get()
  static getAao = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aao",
  })
  @post("{id}")
  static createAao = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
