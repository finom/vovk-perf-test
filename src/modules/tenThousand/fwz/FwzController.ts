import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fwz")
export default class FwzController {
  @operation({
    summary: "Get Fwz",
  })
  @get()
  static getFwz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fwz",
  })
  @post("{id}")
  static createFwz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
