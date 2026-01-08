import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("btu")
export default class BtuController {
  @operation({
    summary: "Get Btu",
  })
  @get()
  static getBtu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Btu",
  })
  @post("{id}")
  static createBtu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
