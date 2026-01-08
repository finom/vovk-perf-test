import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bkg")
export default class BkgController {
  @operation({
    summary: "Get Bkg",
  })
  @get()
  static getBkg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bkg",
  })
  @post("{id}")
  static createBkg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
