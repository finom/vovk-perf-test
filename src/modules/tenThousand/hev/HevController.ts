import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hev")
export default class HevController {
  @operation({
    summary: "Get Hev",
  })
  @get()
  static getHev = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hev",
  })
  @post("{id}")
  static createHev = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
