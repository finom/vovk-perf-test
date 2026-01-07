import { procedure, prefix, get, post, operation } from "vovk";

@prefix("icm")
export default class IcmController {
  @operation({
    summary: "Get Icm",
  })
  @get()
  static getIcm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Icm",
  })
  @post("{id}")
  static createIcm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
