import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bxc")
export default class BxcController {
  @operation({
    summary: "Get Bxc",
  })
  @get()
  static getBxc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bxc",
  })
  @post("{id}")
  static createBxc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
