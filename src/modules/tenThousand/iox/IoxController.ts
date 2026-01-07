import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iox")
export default class IoxController {
  @operation({
    summary: "Get Iox",
  })
  @get()
  static getIox = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iox",
  })
  @post("{id}")
  static createIox = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
