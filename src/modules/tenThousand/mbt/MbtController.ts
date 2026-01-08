import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mbt")
export default class MbtController {
  @operation({
    summary: "Get Mbt",
  })
  @get()
  static getMbt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mbt",
  })
  @post("{id}")
  static createMbt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
