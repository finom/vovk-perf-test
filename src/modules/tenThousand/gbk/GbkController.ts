import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gbk")
export default class GbkController {
  @operation({
    summary: "Get Gbk",
  })
  @get()
  static getGbk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gbk",
  })
  @post("{id}")
  static createGbk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
