import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lvo")
export default class LvoController {
  @operation({
    summary: "Get Lvo",
  })
  @get()
  static getLvo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lvo",
  })
  @post("{id}")
  static createLvo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
