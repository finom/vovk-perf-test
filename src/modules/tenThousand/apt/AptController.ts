import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("apt")
export default class AptController {
  @operation({
    summary: "Get Apt",
  })
  @get()
  static getApt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Apt",
  })
  @post("{id}")
  static createApt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
