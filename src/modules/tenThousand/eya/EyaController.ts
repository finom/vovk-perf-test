import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eya")
export default class EyaController {
  @operation({
    summary: "Get Eya",
  })
  @get()
  static getEya = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eya",
  })
  @post("{id}")
  static createEya = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
