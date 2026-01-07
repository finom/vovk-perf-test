import { procedure, prefix, get, post, operation } from "vovk";

@prefix("itb")
export default class ItbController {
  @operation({
    summary: "Get Itb",
  })
  @get()
  static getItb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Itb",
  })
  @post("{id}")
  static createItb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
