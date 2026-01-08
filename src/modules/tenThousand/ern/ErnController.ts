import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ern")
export default class ErnController {
  @operation({
    summary: "Get Ern",
  })
  @get()
  static getErn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ern",
  })
  @post("{id}")
  static createErn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
