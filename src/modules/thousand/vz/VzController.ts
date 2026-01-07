import { procedure, prefix, get, post, operation } from "vovk";

@prefix("vz")
export default class VzController {
  @operation({
    summary: "Get Vz",
  })
  @get()
  static getVz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Vz",
  })
  @post("{id}")
  static createVz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
