import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ijy")
export default class IjyController {
  @operation({
    summary: "Get Ijy",
  })
  @get()
  static getIjy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ijy",
  })
  @post("{id}")
  static createIjy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
