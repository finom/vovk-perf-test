import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lpk")
export default class LpkController {
  @operation({
    summary: "Get Lpk",
  })
  @get()
  static getLpk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lpk",
  })
  @post("{id}")
  static createLpk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
