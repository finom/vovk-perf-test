import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lyj")
export default class LyjController {
  @operation({
    summary: "Get Lyj",
  })
  @get()
  static getLyj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lyj",
  })
  @post("{id}")
  static createLyj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
