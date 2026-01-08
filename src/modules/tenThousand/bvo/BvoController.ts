import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bvo")
export default class BvoController {
  @operation({
    summary: "Get Bvo",
  })
  @get()
  static getBvo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bvo",
  })
  @post("{id}")
  static createBvo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
