import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fdb")
export default class FdbController {
  @operation({
    summary: "Get Fdb",
  })
  @get()
  static getFdb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fdb",
  })
  @post("{id}")
  static createFdb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
