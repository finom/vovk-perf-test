import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hqw")
export default class HqwController {
  @operation({
    summary: "Get Hqw",
  })
  @get()
  static getHqw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hqw",
  })
  @post("{id}")
  static createHqw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
