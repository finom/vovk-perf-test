import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cci")
export default class CciController {
  @operation({
    summary: "Get Cci",
  })
  @get()
  static getCci = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cci",
  })
  @post("{id}")
  static createCci = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
