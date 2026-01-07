import { procedure, prefix, get, post, operation } from "vovk";

@prefix("oc")
export default class OcController {
  @operation({
    summary: "Get Oc",
  })
  @get()
  static getOc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Oc",
  })
  @post("{id}")
  static createOc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
