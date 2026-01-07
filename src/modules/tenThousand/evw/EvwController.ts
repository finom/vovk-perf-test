import { procedure, prefix, get, post, operation } from "vovk";

@prefix("evw")
export default class EvwController {
  @operation({
    summary: "Get Evw",
  })
  @get()
  static getEvw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Evw",
  })
  @post("{id}")
  static createEvw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
