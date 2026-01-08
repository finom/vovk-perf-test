import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("myz")
export default class MyzController {
  @operation({
    summary: "Get Myz",
  })
  @get()
  static getMyz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Myz",
  })
  @post("{id}")
  static createMyz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
