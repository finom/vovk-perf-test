import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iwa")
export default class IwaController {
  @operation({
    summary: "Get Iwa",
  })
  @get()
  static getIwa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iwa",
  })
  @post("{id}")
  static createIwa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
