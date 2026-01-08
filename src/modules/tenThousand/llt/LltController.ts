import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("llt")
export default class LltController {
  @operation({
    summary: "Get Llt",
  })
  @get()
  static getLlt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Llt",
  })
  @post("{id}")
  static createLlt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
