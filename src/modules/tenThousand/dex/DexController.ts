import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dex")
export default class DexController {
  @operation({
    summary: "Get Dex",
  })
  @get()
  static getDex = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dex",
  })
  @post("{id}")
  static createDex = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
