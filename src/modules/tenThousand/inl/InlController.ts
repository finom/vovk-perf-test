import { procedure, prefix, get, post, operation } from "vovk";

@prefix("inl")
export default class InlController {
  @operation({
    summary: "Get Inl",
  })
  @get()
  static getInl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Inl",
  })
  @post("{id}")
  static createInl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
