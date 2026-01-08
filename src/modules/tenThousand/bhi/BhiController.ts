import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bhi")
export default class BhiController {
  @operation({
    summary: "Get Bhi",
  })
  @get()
  static getBhi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bhi",
  })
  @post("{id}")
  static createBhi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
