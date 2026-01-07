import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cdo")
export default class CdoController {
  @operation({
    summary: "Get Cdo",
  })
  @get()
  static getCdo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cdo",
  })
  @post("{id}")
  static createCdo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
