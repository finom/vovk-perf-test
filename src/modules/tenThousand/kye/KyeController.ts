import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kye")
export default class KyeController {
  @operation({
    summary: "Get Kye",
  })
  @get()
  static getKye = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kye",
  })
  @post("{id}")
  static createKye = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
