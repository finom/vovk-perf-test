import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hrd")
export default class HrdController {
  @operation({
    summary: "Get Hrd",
  })
  @get()
  static getHrd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hrd",
  })
  @post("{id}")
  static createHrd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
