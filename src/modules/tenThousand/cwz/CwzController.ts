import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cwz")
export default class CwzController {
  @operation({
    summary: "Get Cwz",
  })
  @get()
  static getCwz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cwz",
  })
  @post("{id}")
  static createCwz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
