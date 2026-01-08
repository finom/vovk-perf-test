import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bgf")
export default class BgfController {
  @operation({
    summary: "Get Bgf",
  })
  @get()
  static getBgf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bgf",
  })
  @post("{id}")
  static createBgf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
