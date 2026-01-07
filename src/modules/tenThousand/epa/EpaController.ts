import { procedure, prefix, get, post, operation } from "vovk";

@prefix("epa")
export default class EpaController {
  @operation({
    summary: "Get Epa",
  })
  @get()
  static getEpa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Epa",
  })
  @post("{id}")
  static createEpa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
