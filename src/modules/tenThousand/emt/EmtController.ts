import { procedure, prefix, get, post, operation } from "vovk";

@prefix("emt")
export default class EmtController {
  @operation({
    summary: "Get Emt",
  })
  @get()
  static getEmt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Emt",
  })
  @post("{id}")
  static createEmt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
