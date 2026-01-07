import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ncf")
export default class NcfController {
  @operation({
    summary: "Get Ncf",
  })
  @get()
  static getNcf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ncf",
  })
  @post("{id}")
  static createNcf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
