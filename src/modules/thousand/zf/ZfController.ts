import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("zf")
export default class ZfController {
  @operation({
    summary: "Get Zf",
  })
  @get()
  static getZf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Zf",
  })
  @post("{id}")
  static createZf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
