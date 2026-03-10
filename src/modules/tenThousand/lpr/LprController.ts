import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lpr")
export default class LprController {
  @operation({
    summary: "Get Lpr",
  })
  @get()
  static getLpr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lpr",
  })
  @post("{id}")
  static createLpr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
