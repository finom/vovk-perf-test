import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hqk")
export default class HqkController {
  @operation({
    summary: "Get Hqk",
  })
  @get()
  static getHqk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hqk",
  })
  @post("{id}")
  static createHqk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
