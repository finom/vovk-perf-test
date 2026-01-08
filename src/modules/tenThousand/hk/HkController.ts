import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hk")
export default class HkController {
  @operation({
    summary: "Get Hk",
  })
  @get()
  static getHk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hk",
  })
  @post("{id}")
  static createHk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
