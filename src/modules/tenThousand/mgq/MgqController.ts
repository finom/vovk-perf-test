import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mgq")
export default class MgqController {
  @operation({
    summary: "Get Mgq",
  })
  @get()
  static getMgq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mgq",
  })
  @post("{id}")
  static createMgq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
