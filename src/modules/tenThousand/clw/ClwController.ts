import { procedure, prefix, get, post, operation } from "vovk";

@prefix("clw")
export default class ClwController {
  @operation({
    summary: "Get Clw",
  })
  @get()
  static getClw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Clw",
  })
  @post("{id}")
  static createClw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
