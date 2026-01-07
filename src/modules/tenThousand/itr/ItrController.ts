import { procedure, prefix, get, post, operation } from "vovk";

@prefix("itr")
export default class ItrController {
  @operation({
    summary: "Get Itr",
  })
  @get()
  static getItr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Itr",
  })
  @post("{id}")
  static createItr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
