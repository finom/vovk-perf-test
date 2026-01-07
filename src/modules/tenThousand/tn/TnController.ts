import { procedure, prefix, get, post, operation } from "vovk";

@prefix("tn")
export default class TnController {
  @operation({
    summary: "Get Tn",
  })
  @get()
  static getTn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Tn",
  })
  @post("{id}")
  static createTn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
