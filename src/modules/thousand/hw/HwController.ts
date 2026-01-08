import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hw")
export default class HwController {
  @operation({
    summary: "Get Hw",
  })
  @get()
  static getHw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hw",
  })
  @post("{id}")
  static createHw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
