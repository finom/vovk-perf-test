import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bn")
export default class BnController {
  @operation({
    summary: "Get Bn",
  })
  @get()
  static getBn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bn",
  })
  @post("{id}")
  static createBn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
