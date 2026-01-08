import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fkc")
export default class FkcController {
  @operation({
    summary: "Get Fkc",
  })
  @get()
  static getFkc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fkc",
  })
  @post("{id}")
  static createFkc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
