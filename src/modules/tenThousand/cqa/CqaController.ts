import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cqa")
export default class CqaController {
  @operation({
    summary: "Get Cqa",
  })
  @get()
  static getCqa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cqa",
  })
  @post("{id}")
  static createCqa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
