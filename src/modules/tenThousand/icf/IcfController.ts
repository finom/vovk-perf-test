import { procedure, prefix, get, post, operation } from "vovk";

@prefix("icf")
export default class IcfController {
  @operation({
    summary: "Get Icf",
  })
  @get()
  static getIcf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Icf",
  })
  @post("{id}")
  static createIcf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
