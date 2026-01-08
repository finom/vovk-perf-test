import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bxe")
export default class BxeController {
  @operation({
    summary: "Get Bxe",
  })
  @get()
  static getBxe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bxe",
  })
  @post("{id}")
  static createBxe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
