import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hht")
export default class HhtController {
  @operation({
    summary: "Get Hht",
  })
  @get()
  static getHht = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hht",
  })
  @post("{id}")
  static createHht = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
