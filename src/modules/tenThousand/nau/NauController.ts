import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nau")
export default class NauController {
  @operation({
    summary: "Get Nau",
  })
  @get()
  static getNau = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nau",
  })
  @post("{id}")
  static createNau = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
