import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fao")
export default class FaoController {
  @operation({
    summary: "Get Fao",
  })
  @get()
  static getFao = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fao",
  })
  @post("{id}")
  static createFao = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
