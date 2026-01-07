import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hln")
export default class HlnController {
  @operation({
    summary: "Get Hln",
  })
  @get()
  static getHln = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hln",
  })
  @post("{id}")
  static createHln = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
