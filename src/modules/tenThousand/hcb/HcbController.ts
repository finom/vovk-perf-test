import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hcb")
export default class HcbController {
  @operation({
    summary: "Get Hcb",
  })
  @get()
  static getHcb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hcb",
  })
  @post("{id}")
  static createHcb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
