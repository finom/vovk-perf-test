import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hhm")
export default class HhmController {
  @operation({
    summary: "Get Hhm",
  })
  @get()
  static getHhm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hhm",
  })
  @post("{id}")
  static createHhm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
