import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eqa")
export default class EqaController {
  @operation({
    summary: "Get Eqa",
  })
  @get()
  static getEqa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eqa",
  })
  @post("{id}")
  static createEqa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
