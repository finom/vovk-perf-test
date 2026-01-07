import { procedure, prefix, get, post, operation } from "vovk";

@prefix("man")
export default class ManController {
  @operation({
    summary: "Get Man",
  })
  @get()
  static getMan = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Man",
  })
  @post("{id}")
  static createMan = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
