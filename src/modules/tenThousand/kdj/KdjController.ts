import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kdj")
export default class KdjController {
  @operation({
    summary: "Get Kdj",
  })
  @get()
  static getKdj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kdj",
  })
  @post("{id}")
  static createKdj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
