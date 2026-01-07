import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mkf")
export default class MkfController {
  @operation({
    summary: "Get Mkf",
  })
  @get()
  static getMkf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mkf",
  })
  @post("{id}")
  static createMkf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
