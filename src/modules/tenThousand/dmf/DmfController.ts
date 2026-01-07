import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dmf")
export default class DmfController {
  @operation({
    summary: "Get Dmf",
  })
  @get()
  static getDmf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dmf",
  })
  @post("{id}")
  static createDmf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
