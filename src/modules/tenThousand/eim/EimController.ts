import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eim")
export default class EimController {
  @operation({
    summary: "Get Eim",
  })
  @get()
  static getEim = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eim",
  })
  @post("{id}")
  static createEim = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
