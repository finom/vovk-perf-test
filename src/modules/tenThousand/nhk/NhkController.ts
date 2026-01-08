import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nhk")
export default class NhkController {
  @operation({
    summary: "Get Nhk",
  })
  @get()
  static getNhk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nhk",
  })
  @post("{id}")
  static createNhk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
