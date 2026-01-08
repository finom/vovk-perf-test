import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("rp")
export default class RpController {
  @operation({
    summary: "Get Rp",
  })
  @get()
  static getRp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Rp",
  })
  @post("{id}")
  static createRp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
