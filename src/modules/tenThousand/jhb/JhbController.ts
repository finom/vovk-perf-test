import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jhb")
export default class JhbController {
  @operation({
    summary: "Get Jhb",
  })
  @get()
  static getJhb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jhb",
  })
  @post("{id}")
  static createJhb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
