import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cdb")
export default class CdbController {
  @operation({
    summary: "Get Cdb",
  })
  @get()
  static getCdb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cdb",
  })
  @post("{id}")
  static createCdb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
