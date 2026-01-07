import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cok")
export default class CokController {
  @operation({
    summary: "Get Cok",
  })
  @get()
  static getCok = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cok",
  })
  @post("{id}")
  static createCok = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
