import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fmk")
export default class FmkController {
  @operation({
    summary: "Get Fmk",
  })
  @get()
  static getFmk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fmk",
  })
  @post("{id}")
  static createFmk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
