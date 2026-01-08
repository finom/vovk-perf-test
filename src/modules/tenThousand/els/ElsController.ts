import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("els")
export default class ElsController {
  @operation({
    summary: "Get Els",
  })
  @get()
  static getEls = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Els",
  })
  @post("{id}")
  static createEls = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
