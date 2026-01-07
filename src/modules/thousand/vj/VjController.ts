import { procedure, prefix, get, post, operation } from "vovk";

@prefix("vj")
export default class VjController {
  @operation({
    summary: "Get Vj",
  })
  @get()
  static getVj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Vj",
  })
  @post("{id}")
  static createVj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
