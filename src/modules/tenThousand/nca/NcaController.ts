import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nca")
export default class NcaController {
  @operation({
    summary: "Get Nca",
  })
  @get()
  static getNca = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nca",
  })
  @post("{id}")
  static createNca = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
