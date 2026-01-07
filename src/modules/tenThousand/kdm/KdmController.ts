import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kdm")
export default class KdmController {
  @operation({
    summary: "Get Kdm",
  })
  @get()
  static getKdm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kdm",
  })
  @post("{id}")
  static createKdm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
