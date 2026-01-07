import { procedure, prefix, get, post, operation } from "vovk";

@prefix("evs")
export default class EvsController {
  @operation({
    summary: "Get Evs",
  })
  @get()
  static getEvs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Evs",
  })
  @post("{id}")
  static createEvs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
