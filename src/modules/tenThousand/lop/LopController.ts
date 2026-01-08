import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lop")
export default class LopController {
  @operation({
    summary: "Get Lop",
  })
  @get()
  static getLop = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lop",
  })
  @post("{id}")
  static createLop = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
