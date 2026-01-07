import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kzg")
export default class KzgController {
  @operation({
    summary: "Get Kzg",
  })
  @get()
  static getKzg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kzg",
  })
  @post("{id}")
  static createKzg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
