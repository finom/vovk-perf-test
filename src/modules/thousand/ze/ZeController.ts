import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ze")
export default class ZeController {
  @operation({
    summary: "Get Ze",
  })
  @get()
  static getZe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ze",
  })
  @post("{id}")
  static createZe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
