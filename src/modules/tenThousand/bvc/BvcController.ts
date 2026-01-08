import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bvc")
export default class BvcController {
  @operation({
    summary: "Get Bvc",
  })
  @get()
  static getBvc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bvc",
  })
  @post("{id}")
  static createBvc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
