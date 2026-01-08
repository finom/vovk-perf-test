import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("grn")
export default class GrnController {
  @operation({
    summary: "Get Grn",
  })
  @get()
  static getGrn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Grn",
  })
  @post("{id}")
  static createGrn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
