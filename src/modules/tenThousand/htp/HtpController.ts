import { procedure, prefix, get, post, operation } from "vovk";

@prefix("htp")
export default class HtpController {
  @operation({
    summary: "Get Htp",
  })
  @get()
  static getHtp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Htp",
  })
  @post("{id}")
  static createHtp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
