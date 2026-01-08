import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("wz")
export default class WzController {
  @operation({
    summary: "Get Wz",
  })
  @get()
  static getWz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Wz",
  })
  @post("{id}")
  static createWz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
