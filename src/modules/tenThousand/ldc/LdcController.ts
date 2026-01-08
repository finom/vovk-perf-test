import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ldc")
export default class LdcController {
  @operation({
    summary: "Get Ldc",
  })
  @get()
  static getLdc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ldc",
  })
  @post("{id}")
  static createLdc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
