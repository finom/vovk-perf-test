import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bom")
export default class BomController {
  @operation({
    summary: "Get Bom",
  })
  @get()
  static getBom = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bom",
  })
  @post("{id}")
  static createBom = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
