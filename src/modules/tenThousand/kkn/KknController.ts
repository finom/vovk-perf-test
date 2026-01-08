import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kkn")
export default class KknController {
  @operation({
    summary: "Get Kkn",
  })
  @get()
  static getKkn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kkn",
  })
  @post("{id}")
  static createKkn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
