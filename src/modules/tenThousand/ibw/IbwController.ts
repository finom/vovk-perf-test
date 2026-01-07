import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ibw")
export default class IbwController {
  @operation({
    summary: "Get Ibw",
  })
  @get()
  static getIbw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ibw",
  })
  @post("{id}")
  static createIbw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
