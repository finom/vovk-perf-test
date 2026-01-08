import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dwd")
export default class DwdController {
  @operation({
    summary: "Get Dwd",
  })
  @get()
  static getDwd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dwd",
  })
  @post("{id}")
  static createDwd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
