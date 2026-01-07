import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cpe")
export default class CpeController {
  @operation({
    summary: "Get Cpe",
  })
  @get()
  static getCpe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cpe",
  })
  @post("{id}")
  static createCpe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
