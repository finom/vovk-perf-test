import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("zm")
export default class ZmController {
  @operation({
    summary: "Get Zm",
  })
  @get()
  static getZm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Zm",
  })
  @post("{id}")
  static createZm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
