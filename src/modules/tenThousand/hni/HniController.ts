import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hni")
export default class HniController {
  @operation({
    summary: "Get Hni",
  })
  @get()
  static getHni = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hni",
  })
  @post("{id}")
  static createHni = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
