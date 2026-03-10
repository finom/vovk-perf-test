import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lyw")
export default class LywController {
  @operation({
    summary: "Get Lyw",
  })
  @get()
  static getLyw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lyw",
  })
  @post("{id}")
  static createLyw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
