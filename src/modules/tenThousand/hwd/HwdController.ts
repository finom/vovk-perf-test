import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hwd")
export default class HwdController {
  @operation({
    summary: "Get Hwd",
  })
  @get()
  static getHwd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hwd",
  })
  @post("{id}")
  static createHwd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
