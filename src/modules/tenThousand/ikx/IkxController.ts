import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ikx")
export default class IkxController {
  @operation({
    summary: "Get Ikx",
  })
  @get()
  static getIkx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ikx",
  })
  @post("{id}")
  static createIkx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
