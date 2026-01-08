import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fwx")
export default class FwxController {
  @operation({
    summary: "Get Fwx",
  })
  @get()
  static getFwx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fwx",
  })
  @post("{id}")
  static createFwx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
