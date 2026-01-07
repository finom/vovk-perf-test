import { procedure, prefix, get, post, operation } from "vovk";

@prefix("csw")
export default class CswController {
  @operation({
    summary: "Get Csw",
  })
  @get()
  static getCsw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Csw",
  })
  @post("{id}")
  static createCsw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
