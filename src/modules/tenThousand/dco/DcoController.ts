import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dco")
export default class DcoController {
  @operation({
    summary: "Get Dco",
  })
  @get()
  static getDco = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dco",
  })
  @post("{id}")
  static createDco = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
