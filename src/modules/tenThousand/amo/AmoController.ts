import { procedure, prefix, get, post, operation } from "vovk";

@prefix("amo")
export default class AmoController {
  @operation({
    summary: "Get Amo",
  })
  @get()
  static getAmo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Amo",
  })
  @post("{id}")
  static createAmo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
