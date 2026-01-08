import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("drf")
export default class DrfController {
  @operation({
    summary: "Get Drf",
  })
  @get()
  static getDrf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Drf",
  })
  @post("{id}")
  static createDrf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
