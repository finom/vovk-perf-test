import { procedure, prefix, get, post, operation } from "vovk";

@prefix("maj")
export default class MajController {
  @operation({
    summary: "Get Maj",
  })
  @get()
  static getMaj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Maj",
  })
  @post("{id}")
  static createMaj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
