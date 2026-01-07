import { procedure, prefix, get, post, operation } from "vovk";

@prefix("erh")
export default class ErhController {
  @operation({
    summary: "Get Erh",
  })
  @get()
  static getErh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Erh",
  })
  @post("{id}")
  static createErh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
