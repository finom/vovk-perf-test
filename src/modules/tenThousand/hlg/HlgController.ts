import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hlg")
export default class HlgController {
  @operation({
    summary: "Get Hlg",
  })
  @get()
  static getHlg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hlg",
  })
  @post("{id}")
  static createHlg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
