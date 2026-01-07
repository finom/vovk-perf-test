import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ncn")
export default class NcnController {
  @operation({
    summary: "Get Ncn",
  })
  @get()
  static getNcn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ncn",
  })
  @post("{id}")
  static createNcn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
