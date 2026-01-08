import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("v")
export default class VController {
  @operation({
    summary: "Get V",
  })
  @get()
  static getV = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create V",
  })
  @post("{id}")
  static createV = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
