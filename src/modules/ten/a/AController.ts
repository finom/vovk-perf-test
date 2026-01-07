import { procedure, prefix, get, post, operation } from "vovk";

@prefix("a")
export default class AController {
  @operation({
    summary: "Get A",
  })
  @get()
  static getA = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create A",
  })
  @post("{id}")
  static createA = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
