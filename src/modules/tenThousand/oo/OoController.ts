import { procedure, prefix, get, post, operation } from "vovk";

@prefix("oo")
export default class OoController {
  @operation({
    summary: "Get Oo",
  })
  @get()
  static getOo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Oo",
  })
  @post("{id}")
  static createOo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
