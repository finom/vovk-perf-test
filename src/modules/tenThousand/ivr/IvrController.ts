import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ivr")
export default class IvrController {
  @operation({
    summary: "Get Ivr",
  })
  @get()
  static getIvr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ivr",
  })
  @post("{id}")
  static createIvr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
