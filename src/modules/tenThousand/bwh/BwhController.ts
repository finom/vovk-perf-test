import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bwh")
export default class BwhController {
  @operation({
    summary: "Get Bwh",
  })
  @get()
  static getBwh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bwh",
  })
  @post("{id}")
  static createBwh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
