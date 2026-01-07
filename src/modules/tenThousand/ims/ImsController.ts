import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ims")
export default class ImsController {
  @operation({
    summary: "Get Ims",
  })
  @get()
  static getIms = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ims",
  })
  @post("{id}")
  static createIms = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
