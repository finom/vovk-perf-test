import { procedure, prefix, get, post, operation } from "vovk";

@prefix("vu")
export default class VuController {
  @operation({
    summary: "Get Vu",
  })
  @get()
  static getVu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Vu",
  })
  @post("{id}")
  static createVu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
