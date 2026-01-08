import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cmb")
export default class CmbController {
  @operation({
    summary: "Get Cmb",
  })
  @get()
  static getCmb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cmb",
  })
  @post("{id}")
  static createCmb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
