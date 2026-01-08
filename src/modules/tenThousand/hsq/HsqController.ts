import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hsq")
export default class HsqController {
  @operation({
    summary: "Get Hsq",
  })
  @get()
  static getHsq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hsq",
  })
  @post("{id}")
  static createHsq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
