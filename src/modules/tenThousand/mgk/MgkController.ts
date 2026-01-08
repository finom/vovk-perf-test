import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mgk")
export default class MgkController {
  @operation({
    summary: "Get Mgk",
  })
  @get()
  static getMgk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mgk",
  })
  @post("{id}")
  static createMgk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
