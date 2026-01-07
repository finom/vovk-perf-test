import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nox")
export default class NoxController {
  @operation({
    summary: "Get Nox",
  })
  @get()
  static getNox = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nox",
  })
  @post("{id}")
  static createNox = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
