import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bsq")
export default class BsqController {
  @operation({
    summary: "Get Bsq",
  })
  @get()
  static getBsq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bsq",
  })
  @post("{id}")
  static createBsq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
