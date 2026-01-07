import { procedure, prefix, get, post, operation } from "vovk";

@prefix("evz")
export default class EvzController {
  @operation({
    summary: "Get Evz",
  })
  @get()
  static getEvz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Evz",
  })
  @post("{id}")
  static createEvz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
