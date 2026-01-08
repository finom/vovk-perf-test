import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mbi")
export default class MbiController {
  @operation({
    summary: "Get Mbi",
  })
  @get()
  static getMbi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mbi",
  })
  @post("{id}")
  static createMbi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
