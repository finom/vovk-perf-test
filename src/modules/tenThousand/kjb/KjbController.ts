import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kjb")
export default class KjbController {
  @operation({
    summary: "Get Kjb",
  })
  @get()
  static getKjb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kjb",
  })
  @post("{id}")
  static createKjb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
