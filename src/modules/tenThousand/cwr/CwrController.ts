import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cwr")
export default class CwrController {
  @operation({
    summary: "Get Cwr",
  })
  @get()
  static getCwr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cwr",
  })
  @post("{id}")
  static createCwr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
