import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ex")
export default class ExController {
  @operation({
    summary: "Get Ex",
  })
  @get()
  static getEx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ex",
  })
  @post("{id}")
  static createEx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
