import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hzm")
export default class HzmController {
  @operation({
    summary: "Get Hzm",
  })
  @get()
  static getHzm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hzm",
  })
  @post("{id}")
  static createHzm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
