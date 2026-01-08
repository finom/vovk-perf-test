import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("luu")
export default class LuuController {
  @operation({
    summary: "Get Luu",
  })
  @get()
  static getLuu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Luu",
  })
  @post("{id}")
  static createLuu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
