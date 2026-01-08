import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("brf")
export default class BrfController {
  @operation({
    summary: "Get Brf",
  })
  @get()
  static getBrf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Brf",
  })
  @post("{id}")
  static createBrf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
