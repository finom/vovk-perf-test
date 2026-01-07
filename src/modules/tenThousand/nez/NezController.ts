import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nez")
export default class NezController {
  @operation({
    summary: "Get Nez",
  })
  @get()
  static getNez = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nez",
  })
  @post("{id}")
  static createNez = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
