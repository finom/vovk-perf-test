import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ivd")
export default class IvdController {
  @operation({
    summary: "Get Ivd",
  })
  @get()
  static getIvd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ivd",
  })
  @post("{id}")
  static createIvd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
