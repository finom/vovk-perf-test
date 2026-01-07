import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jhw")
export default class JhwController {
  @operation({
    summary: "Get Jhw",
  })
  @get()
  static getJhw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jhw",
  })
  @post("{id}")
  static createJhw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
