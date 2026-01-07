import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iye")
export default class IyeController {
  @operation({
    summary: "Get Iye",
  })
  @get()
  static getIye = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iye",
  })
  @post("{id}")
  static createIye = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
