import { procedure, prefix, get, post, operation } from "vovk";

@prefix("abh")
export default class AbhController {
  @operation({
    summary: "Get Abh",
  })
  @get()
  static getAbh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Abh",
  })
  @post("{id}")
  static createAbh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
