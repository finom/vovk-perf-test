import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kyj")
export default class KyjController {
  @operation({
    summary: "Get Kyj",
  })
  @get()
  static getKyj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kyj",
  })
  @post("{id}")
  static createKyj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
