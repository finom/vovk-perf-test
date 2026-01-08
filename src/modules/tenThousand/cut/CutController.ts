import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cut")
export default class CutController {
  @operation({
    summary: "Get Cut",
  })
  @get()
  static getCut = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cut",
  })
  @post("{id}")
  static createCut = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
