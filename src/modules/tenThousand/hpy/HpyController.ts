import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hpy")
export default class HpyController {
  @operation({
    summary: "Get Hpy",
  })
  @get()
  static getHpy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hpy",
  })
  @post("{id}")
  static createHpy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
