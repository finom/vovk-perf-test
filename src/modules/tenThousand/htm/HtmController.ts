import { procedure, prefix, get, post, operation } from "vovk";

@prefix("htm")
export default class HtmController {
  @operation({
    summary: "Get Htm",
  })
  @get()
  static getHtm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Htm",
  })
  @post("{id}")
  static createHtm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
