import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mab")
export default class MabController {
  @operation({
    summary: "Get Mab",
  })
  @get()
  static getMab = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mab",
  })
  @post("{id}")
  static createMab = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
