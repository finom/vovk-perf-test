import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hfi")
export default class HfiController {
  @operation({
    summary: "Get Hfi",
  })
  @get()
  static getHfi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hfi",
  })
  @post("{id}")
  static createHfi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
