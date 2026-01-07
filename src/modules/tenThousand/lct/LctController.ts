import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lct")
export default class LctController {
  @operation({
    summary: "Get Lct",
  })
  @get()
  static getLct = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lct",
  })
  @post("{id}")
  static createLct = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
