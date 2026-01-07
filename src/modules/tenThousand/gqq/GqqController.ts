import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gqq")
export default class GqqController {
  @operation({
    summary: "Get Gqq",
  })
  @get()
  static getGqq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gqq",
  })
  @post("{id}")
  static createGqq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
