import { procedure, prefix, get, post, operation } from "vovk";

@prefix("krl")
export default class KrlController {
  @operation({
    summary: "Get Krl",
  })
  @get()
  static getKrl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Krl",
  })
  @post("{id}")
  static createKrl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
