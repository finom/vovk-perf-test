import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fli")
export default class FliController {
  @operation({
    summary: "Get Fli",
  })
  @get()
  static getFli = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fli",
  })
  @post("{id}")
  static createFli = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
