import { procedure, prefix, get, post, operation } from "vovk";

@prefix("amf")
export default class AmfController {
  @operation({
    summary: "Get Amf",
  })
  @get()
  static getAmf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Amf",
  })
  @post("{id}")
  static createAmf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
