import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dpz")
export default class DpzController {
  @operation({
    summary: "Get Dpz",
  })
  @get()
  static getDpz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dpz",
  })
  @post("{id}")
  static createDpz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
