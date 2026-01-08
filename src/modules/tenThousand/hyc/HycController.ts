import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hyc")
export default class HycController {
  @operation({
    summary: "Get Hyc",
  })
  @get()
  static getHyc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hyc",
  })
  @post("{id}")
  static createHyc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
