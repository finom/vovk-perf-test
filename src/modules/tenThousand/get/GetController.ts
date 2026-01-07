import { procedure, prefix, get, post, operation } from "vovk";

@prefix("get")
export default class GetController {
  @operation({
    summary: "Get Get",
  })
  @get()
  static getGet = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Get",
  })
  @post("{id}")
  static createGet = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
