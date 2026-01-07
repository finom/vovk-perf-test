import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hyj")
export default class HyjController {
  @operation({
    summary: "Get Hyj",
  })
  @get()
  static getHyj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hyj",
  })
  @post("{id}")
  static createHyj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
