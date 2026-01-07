import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ioa")
export default class IoaController {
  @operation({
    summary: "Get Ioa",
  })
  @get()
  static getIoa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ioa",
  })
  @post("{id}")
  static createIoa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
