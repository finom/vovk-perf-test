import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mef")
export default class MefController {
  @operation({
    summary: "Get Mef",
  })
  @get()
  static getMef = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mef",
  })
  @post("{id}")
  static createMef = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
