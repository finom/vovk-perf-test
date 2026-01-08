import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mtw")
export default class MtwController {
  @operation({
    summary: "Get Mtw",
  })
  @get()
  static getMtw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mtw",
  })
  @post("{id}")
  static createMtw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
