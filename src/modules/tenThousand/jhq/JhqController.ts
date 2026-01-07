import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jhq")
export default class JhqController {
  @operation({
    summary: "Get Jhq",
  })
  @get()
  static getJhq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jhq",
  })
  @post("{id}")
  static createJhq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
