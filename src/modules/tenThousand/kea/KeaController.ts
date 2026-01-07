import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kea")
export default class KeaController {
  @operation({
    summary: "Get Kea",
  })
  @get()
  static getKea = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kea",
  })
  @post("{id}")
  static createKea = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
