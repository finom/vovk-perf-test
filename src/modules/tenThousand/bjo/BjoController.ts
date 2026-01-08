import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bjo")
export default class BjoController {
  @operation({
    summary: "Get Bjo",
  })
  @get()
  static getBjo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bjo",
  })
  @post("{id}")
  static createBjo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
