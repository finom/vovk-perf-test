import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ept")
export default class EptController {
  @operation({
    summary: "Get Ept",
  })
  @get()
  static getEpt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ept",
  })
  @post("{id}")
  static createEpt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
