import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jna")
export default class JnaController {
  @operation({
    summary: "Get Jna",
  })
  @get()
  static getJna = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jna",
  })
  @post("{id}")
  static createJna = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
