import { procedure, prefix, get, post, operation } from "vovk";

@prefix("epw")
export default class EpwController {
  @operation({
    summary: "Get Epw",
  })
  @get()
  static getEpw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Epw",
  })
  @post("{id}")
  static createEpw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
