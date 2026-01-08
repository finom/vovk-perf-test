import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dfx")
export default class DfxController {
  @operation({
    summary: "Get Dfx",
  })
  @get()
  static getDfx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dfx",
  })
  @post("{id}")
  static createDfx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
