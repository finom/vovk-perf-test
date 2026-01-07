import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eed")
export default class EedController {
  @operation({
    summary: "Get Eed",
  })
  @get()
  static getEed = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eed",
  })
  @post("{id}")
  static createEed = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
