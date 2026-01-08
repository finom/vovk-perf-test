import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hzb")
export default class HzbController {
  @operation({
    summary: "Get Hzb",
  })
  @get()
  static getHzb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hzb",
  })
  @post("{id}")
  static createHzb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
