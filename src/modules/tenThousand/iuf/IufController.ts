import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iuf")
export default class IufController {
  @operation({
    summary: "Get Iuf",
  })
  @get()
  static getIuf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iuf",
  })
  @post("{id}")
  static createIuf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
