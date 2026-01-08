import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lcd")
export default class LcdController {
  @operation({
    summary: "Get Lcd",
  })
  @get()
  static getLcd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lcd",
  })
  @post("{id}")
  static createLcd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
