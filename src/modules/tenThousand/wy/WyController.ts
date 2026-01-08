import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("wy")
export default class WyController {
  @operation({
    summary: "Get Wy",
  })
  @get()
  static getWy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Wy",
  })
  @post("{id}")
  static createWy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
