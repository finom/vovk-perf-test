import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("msx")
export default class MsxController {
  @operation({
    summary: "Get Msx",
  })
  @get()
  static getMsx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Msx",
  })
  @post("{id}")
  static createMsx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
