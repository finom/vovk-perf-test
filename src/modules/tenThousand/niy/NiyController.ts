import { procedure, prefix, get, post, operation } from "vovk";

@prefix("niy")
export default class NiyController {
  @operation({
    summary: "Get Niy",
  })
  @get()
  static getNiy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Niy",
  })
  @post("{id}")
  static createNiy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
