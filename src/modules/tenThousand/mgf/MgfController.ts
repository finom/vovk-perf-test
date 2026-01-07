import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mgf")
export default class MgfController {
  @operation({
    summary: "Get Mgf",
  })
  @get()
  static getMgf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mgf",
  })
  @post("{id}")
  static createMgf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
