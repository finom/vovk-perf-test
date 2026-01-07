import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ifr")
export default class IfrController {
  @operation({
    summary: "Get Ifr",
  })
  @get()
  static getIfr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ifr",
  })
  @post("{id}")
  static createIfr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
