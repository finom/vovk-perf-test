import { procedure, prefix, get, post, operation } from "vovk";

@prefix("edd")
export default class EddController {
  @operation({
    summary: "Get Edd",
  })
  @get()
  static getEdd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Edd",
  })
  @post("{id}")
  static createEdd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
