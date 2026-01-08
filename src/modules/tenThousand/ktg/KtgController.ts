import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ktg")
export default class KtgController {
  @operation({
    summary: "Get Ktg",
  })
  @get()
  static getKtg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ktg",
  })
  @post("{id}")
  static createKtg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
