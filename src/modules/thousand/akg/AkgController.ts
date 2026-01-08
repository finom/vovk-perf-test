import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("akg")
export default class AkgController {
  @operation({
    summary: "Get Akg",
  })
  @get()
  static getAkg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Akg",
  })
  @post("{id}")
  static createAkg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
