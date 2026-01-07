import { procedure, prefix, get, post, operation } from "vovk";

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
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
