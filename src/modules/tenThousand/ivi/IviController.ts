import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ivi")
export default class IviController {
  @operation({
    summary: "Get Ivi",
  })
  @get()
  static getIvi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ivi",
  })
  @post("{id}")
  static createIvi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
