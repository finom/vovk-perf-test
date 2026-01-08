import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lgw")
export default class LgwController {
  @operation({
    summary: "Get Lgw",
  })
  @get()
  static getLgw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lgw",
  })
  @post("{id}")
  static createLgw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
