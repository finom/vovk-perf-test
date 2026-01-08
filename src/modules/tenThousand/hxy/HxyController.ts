import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hxy")
export default class HxyController {
  @operation({
    summary: "Get Hxy",
  })
  @get()
  static getHxy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hxy",
  })
  @post("{id}")
  static createHxy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
