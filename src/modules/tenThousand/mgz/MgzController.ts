import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mgz")
export default class MgzController {
  @operation({
    summary: "Get Mgz",
  })
  @get()
  static getMgz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mgz",
  })
  @post("{id}")
  static createMgz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
