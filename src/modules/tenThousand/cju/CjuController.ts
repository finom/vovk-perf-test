import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cju")
export default class CjuController {
  @operation({
    summary: "Get Cju",
  })
  @get()
  static getCju = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cju",
  })
  @post("{id}")
  static createCju = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
