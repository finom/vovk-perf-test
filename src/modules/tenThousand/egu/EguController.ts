import { procedure, prefix, get, post, operation } from "vovk";

@prefix("egu")
export default class EguController {
  @operation({
    summary: "Get Egu",
  })
  @get()
  static getEgu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Egu",
  })
  @post("{id}")
  static createEgu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
