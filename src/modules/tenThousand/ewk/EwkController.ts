import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ewk")
export default class EwkController {
  @operation({
    summary: "Get Ewk",
  })
  @get()
  static getEwk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ewk",
  })
  @post("{id}")
  static createEwk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
