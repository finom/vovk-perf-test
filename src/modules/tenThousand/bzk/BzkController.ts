import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bzk")
export default class BzkController {
  @operation({
    summary: "Get Bzk",
  })
  @get()
  static getBzk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bzk",
  })
  @post("{id}")
  static createBzk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
