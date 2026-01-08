import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fwg")
export default class FwgController {
  @operation({
    summary: "Get Fwg",
  })
  @get()
  static getFwg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fwg",
  })
  @post("{id}")
  static createFwg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
