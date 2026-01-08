import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hlu")
export default class HluController {
  @operation({
    summary: "Get Hlu",
  })
  @get()
  static getHlu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hlu",
  })
  @post("{id}")
  static createHlu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
