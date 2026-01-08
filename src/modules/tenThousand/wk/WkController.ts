import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("wk")
export default class WkController {
  @operation({
    summary: "Get Wk",
  })
  @get()
  static getWk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Wk",
  })
  @post("{id}")
  static createWk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
