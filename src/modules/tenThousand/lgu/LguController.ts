import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lgu")
export default class LguController {
  @operation({
    summary: "Get Lgu",
  })
  @get()
  static getLgu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lgu",
  })
  @post("{id}")
  static createLgu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
