import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("afa")
export default class AfaController {
  @operation({
    summary: "Get Afa",
  })
  @get()
  static getAfa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Afa",
  })
  @post("{id}")
  static createAfa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
