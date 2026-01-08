import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bgv")
export default class BgvController {
  @operation({
    summary: "Get Bgv",
  })
  @get()
  static getBgv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bgv",
  })
  @post("{id}")
  static createBgv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
