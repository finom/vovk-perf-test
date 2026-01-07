import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gpj")
export default class GpjController {
  @operation({
    summary: "Get Gpj",
  })
  @get()
  static getGpj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gpj",
  })
  @post("{id}")
  static createGpj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
