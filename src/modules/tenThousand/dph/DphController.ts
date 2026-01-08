import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dph")
export default class DphController {
  @operation({
    summary: "Get Dph",
  })
  @get()
  static getDph = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dph",
  })
  @post("{id}")
  static createDph = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
