import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ecu")
export default class EcuController {
  @operation({
    summary: "Get Ecu",
  })
  @get()
  static getEcu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ecu",
  })
  @post("{id}")
  static createEcu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
