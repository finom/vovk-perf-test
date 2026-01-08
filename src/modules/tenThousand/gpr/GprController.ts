import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gpr")
export default class GprController {
  @operation({
    summary: "Get Gpr",
  })
  @get()
  static getGpr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gpr",
  })
  @post("{id}")
  static createGpr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
