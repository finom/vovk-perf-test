import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lzt")
export default class LztController {
  @operation({
    summary: "Get Lzt",
  })
  @get()
  static getLzt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lzt",
  })
  @post("{id}")
  static createLzt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
