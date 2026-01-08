import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kkc")
export default class KkcController {
  @operation({
    summary: "Get Kkc",
  })
  @get()
  static getKkc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kkc",
  })
  @post("{id}")
  static createKkc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
