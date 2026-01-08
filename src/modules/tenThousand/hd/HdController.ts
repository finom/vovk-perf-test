import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hd")
export default class HdController {
  @operation({
    summary: "Get Hd",
  })
  @get()
  static getHd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hd",
  })
  @post("{id}")
  static createHd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
