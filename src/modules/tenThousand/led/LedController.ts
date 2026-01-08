import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("led")
export default class LedController {
  @operation({
    summary: "Get Led",
  })
  @get()
  static getLed = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Led",
  })
  @post("{id}")
  static createLed = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
