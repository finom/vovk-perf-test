import { procedure, prefix, get, post, operation } from "vovk";

@prefix("keq")
export default class KeqController {
  @operation({
    summary: "Get Keq",
  })
  @get()
  static getKeq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Keq",
  })
  @post("{id}")
  static createKeq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
