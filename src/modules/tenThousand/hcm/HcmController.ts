import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hcm")
export default class HcmController {
  @operation({
    summary: "Get Hcm",
  })
  @get()
  static getHcm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hcm",
  })
  @post("{id}")
  static createHcm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
