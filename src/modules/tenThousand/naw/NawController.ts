import { procedure, prefix, get, post, operation } from "vovk";

@prefix("naw")
export default class NawController {
  @operation({
    summary: "Get Naw",
  })
  @get()
  static getNaw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Naw",
  })
  @post("{id}")
  static createNaw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
