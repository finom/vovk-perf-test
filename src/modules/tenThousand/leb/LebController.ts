import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("leb")
export default class LebController {
  @operation({
    summary: "Get Leb",
  })
  @get()
  static getLeb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Leb",
  })
  @post("{id}")
  static createLeb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
