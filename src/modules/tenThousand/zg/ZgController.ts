import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("zg")
export default class ZgController {
  @operation({
    summary: "Get Zg",
  })
  @get()
  static getZg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Zg",
  })
  @post("{id}")
  static createZg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
