import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bso")
export default class BsoController {
  @operation({
    summary: "Get Bso",
  })
  @get()
  static getBso = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bso",
  })
  @post("{id}")
  static createBso = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
