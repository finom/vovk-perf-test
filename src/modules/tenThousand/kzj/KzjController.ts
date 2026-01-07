import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kzj")
export default class KzjController {
  @operation({
    summary: "Get Kzj",
  })
  @get()
  static getKzj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kzj",
  })
  @post("{id}")
  static createKzj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
