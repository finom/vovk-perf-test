import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bai")
export default class BaiController {
  @operation({
    summary: "Get Bai",
  })
  @get()
  static getBai = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bai",
  })
  @post("{id}")
  static createBai = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
