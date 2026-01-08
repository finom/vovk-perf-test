import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cce")
export default class CceController {
  @operation({
    summary: "Get Cce",
  })
  @get()
  static getCce = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cce",
  })
  @post("{id}")
  static createCce = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
