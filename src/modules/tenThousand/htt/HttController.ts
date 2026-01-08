import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("htt")
export default class HttController {
  @operation({
    summary: "Get Htt",
  })
  @get()
  static getHtt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Htt",
  })
  @post("{id}")
  static createHtt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
