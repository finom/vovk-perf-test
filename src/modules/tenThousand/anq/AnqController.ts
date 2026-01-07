import { procedure, prefix, get, post, operation } from "vovk";

@prefix("anq")
export default class AnqController {
  @operation({
    summary: "Get Anq",
  })
  @get()
  static getAnq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Anq",
  })
  @post("{id}")
  static createAnq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
