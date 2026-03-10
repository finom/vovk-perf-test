import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bgm")
export default class BgmController {
  @operation({
    summary: "Get Bgm",
  })
  @get()
  static getBgm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bgm",
  })
  @post("{id}")
  static createBgm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
