import { procedure, prefix, get, post, operation } from "vovk";

@prefix("epq")
export default class EpqController {
  @operation({
    summary: "Get Epq",
  })
  @get()
  static getEpq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Epq",
  })
  @post("{id}")
  static createEpq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
