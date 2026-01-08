import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("noj")
export default class NojController {
  @operation({
    summary: "Get Noj",
  })
  @get()
  static getNoj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Noj",
  })
  @post("{id}")
  static createNoj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
