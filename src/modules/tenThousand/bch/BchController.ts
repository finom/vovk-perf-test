import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bch")
export default class BchController {
  @operation({
    summary: "Get Bch",
  })
  @get()
  static getBch = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bch",
  })
  @post("{id}")
  static createBch = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
