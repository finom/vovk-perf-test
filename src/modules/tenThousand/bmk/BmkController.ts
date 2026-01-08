import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bmk")
export default class BmkController {
  @operation({
    summary: "Get Bmk",
  })
  @get()
  static getBmk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bmk",
  })
  @post("{id}")
  static createBmk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
