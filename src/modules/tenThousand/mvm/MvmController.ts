import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mvm")
export default class MvmController {
  @operation({
    summary: "Get Mvm",
  })
  @get()
  static getMvm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mvm",
  })
  @post("{id}")
  static createMvm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
