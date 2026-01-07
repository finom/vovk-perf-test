import { procedure, prefix, get, post, operation } from "vovk";

@prefix("irg")
export default class IrgController {
  @operation({
    summary: "Get Irg",
  })
  @get()
  static getIrg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Irg",
  })
  @post("{id}")
  static createIrg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
