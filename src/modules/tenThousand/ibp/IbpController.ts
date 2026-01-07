import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ibp")
export default class IbpController {
  @operation({
    summary: "Get Ibp",
  })
  @get()
  static getIbp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ibp",
  })
  @post("{id}")
  static createIbp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
