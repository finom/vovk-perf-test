import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ese")
export default class EseController {
  @operation({
    summary: "Get Ese",
  })
  @get()
  static getEse = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ese",
  })
  @post("{id}")
  static createEse = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
