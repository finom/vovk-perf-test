import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gao")
export default class GaoController {
  @operation({
    summary: "Get Gao",
  })
  @get()
  static getGao = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gao",
  })
  @post("{id}")
  static createGao = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
