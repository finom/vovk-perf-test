import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("sn")
export default class SnController {
  @operation({
    summary: "Get Sn",
  })
  @get()
  static getSn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Sn",
  })
  @post("{id}")
  static createSn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
