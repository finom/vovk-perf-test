import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hkt")
export default class HktController {
  @operation({
    summary: "Get Hkt",
  })
  @get()
  static getHkt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hkt",
  })
  @post("{id}")
  static createHkt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
