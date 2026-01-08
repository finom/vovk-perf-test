import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fp")
export default class FpController {
  @operation({
    summary: "Get Fp",
  })
  @get()
  static getFp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fp",
  })
  @post("{id}")
  static createFp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
