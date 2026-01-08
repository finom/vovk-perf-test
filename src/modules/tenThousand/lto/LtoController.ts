import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lto")
export default class LtoController {
  @operation({
    summary: "Get Lto",
  })
  @get()
  static getLto = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lto",
  })
  @post("{id}")
  static createLto = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
