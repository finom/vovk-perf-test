import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kxx")
export default class KxxController {
  @operation({
    summary: "Get Kxx",
  })
  @get()
  static getKxx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kxx",
  })
  @post("{id}")
  static createKxx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
