import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jpj")
export default class JpjController {
  @operation({
    summary: "Get Jpj",
  })
  @get()
  static getJpj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jpj",
  })
  @post("{id}")
  static createJpj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
