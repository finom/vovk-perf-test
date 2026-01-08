import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dle")
export default class DleController {
  @operation({
    summary: "Get Dle",
  })
  @get()
  static getDle = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dle",
  })
  @post("{id}")
  static createDle = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
