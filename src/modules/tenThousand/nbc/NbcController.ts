import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nbc")
export default class NbcController {
  @operation({
    summary: "Get Nbc",
  })
  @get()
  static getNbc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nbc",
  })
  @post("{id}")
  static createNbc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
