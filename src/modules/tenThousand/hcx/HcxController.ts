import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hcx")
export default class HcxController {
  @operation({
    summary: "Get Hcx",
  })
  @get()
  static getHcx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hcx",
  })
  @post("{id}")
  static createHcx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
