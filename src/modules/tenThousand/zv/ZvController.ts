import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("zv")
export default class ZvController {
  @operation({
    summary: "Get Zv",
  })
  @get()
  static getZv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Zv",
  })
  @post("{id}")
  static createZv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
