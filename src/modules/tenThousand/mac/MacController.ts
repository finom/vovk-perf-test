import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mac")
export default class MacController {
  @operation({
    summary: "Get Mac",
  })
  @get()
  static getMac = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mac",
  })
  @post("{id}")
  static createMac = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
