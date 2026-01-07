import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ceo")
export default class CeoController {
  @operation({
    summary: "Get Ceo",
  })
  @get()
  static getCeo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ceo",
  })
  @post("{id}")
  static createCeo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
