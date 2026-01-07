import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ix")
export default class IxController {
  @operation({
    summary: "Get Ix",
  })
  @get()
  static getIx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ix",
  })
  @post("{id}")
  static createIx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
