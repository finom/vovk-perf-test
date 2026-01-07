import { procedure, prefix, get, post, operation } from "vovk";

@prefix("evg")
export default class EvgController {
  @operation({
    summary: "Get Evg",
  })
  @get()
  static getEvg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Evg",
  })
  @post("{id}")
  static createEvg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
