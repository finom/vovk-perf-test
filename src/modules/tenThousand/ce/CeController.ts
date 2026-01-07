import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ce")
export default class CeController {
  @operation({
    summary: "Get Ce",
  })
  @get()
  static getCe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ce",
  })
  @post("{id}")
  static createCe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
