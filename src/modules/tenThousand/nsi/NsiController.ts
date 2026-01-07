import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nsi")
export default class NsiController {
  @operation({
    summary: "Get Nsi",
  })
  @get()
  static getNsi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nsi",
  })
  @post("{id}")
  static createNsi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
