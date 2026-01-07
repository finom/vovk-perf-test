import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jhx")
export default class JhxController {
  @operation({
    summary: "Get Jhx",
  })
  @get()
  static getJhx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jhx",
  })
  @post("{id}")
  static createJhx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
