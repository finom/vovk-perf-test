import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mng")
export default class MngController {
  @operation({
    summary: "Get Mng",
  })
  @get()
  static getMng = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mng",
  })
  @post("{id}")
  static createMng = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
