import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hmt")
export default class HmtController {
  @operation({
    summary: "Get Hmt",
  })
  @get()
  static getHmt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hmt",
  })
  @post("{id}")
  static createHmt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
