import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fez")
export default class FezController {
  @operation({
    summary: "Get Fez",
  })
  @get()
  static getFez = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fez",
  })
  @post("{id}")
  static createFez = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
