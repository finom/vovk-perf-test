import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lmz")
export default class LmzController {
  @operation({
    summary: "Get Lmz",
  })
  @get()
  static getLmz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lmz",
  })
  @post("{id}")
  static createLmz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
