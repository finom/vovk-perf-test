import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mzx")
export default class MzxController {
  @operation({
    summary: "Get Mzx",
  })
  @get()
  static getMzx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mzx",
  })
  @post("{id}")
  static createMzx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
