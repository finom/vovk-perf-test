import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mkl")
export default class MklController {
  @operation({
    summary: "Get Mkl",
  })
  @get()
  static getMkl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mkl",
  })
  @post("{id}")
  static createMkl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
