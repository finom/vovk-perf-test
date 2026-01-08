import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mbn")
export default class MbnController {
  @operation({
    summary: "Get Mbn",
  })
  @get()
  static getMbn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mbn",
  })
  @post("{id}")
  static createMbn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
