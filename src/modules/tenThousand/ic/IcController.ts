import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ic")
export default class IcController {
  @operation({
    summary: "Get Ic",
  })
  @get()
  static getIc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ic",
  })
  @post("{id}")
  static createIc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
