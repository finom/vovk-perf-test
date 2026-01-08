import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fqa")
export default class FqaController {
  @operation({
    summary: "Get Fqa",
  })
  @get()
  static getFqa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fqa",
  })
  @post("{id}")
  static createFqa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
