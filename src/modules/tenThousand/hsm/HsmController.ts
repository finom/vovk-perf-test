import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hsm")
export default class HsmController {
  @operation({
    summary: "Get Hsm",
  })
  @get()
  static getHsm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hsm",
  })
  @post("{id}")
  static createHsm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
