import { procedure, prefix, get, post, operation } from "vovk";

@prefix("csb")
export default class CsbController {
  @operation({
    summary: "Get Csb",
  })
  @get()
  static getCsb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Csb",
  })
  @post("{id}")
  static createCsb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
