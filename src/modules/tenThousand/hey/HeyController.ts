import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hey")
export default class HeyController {
  @operation({
    summary: "Get Hey",
  })
  @get()
  static getHey = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hey",
  })
  @post("{id}")
  static createHey = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
