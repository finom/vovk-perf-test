import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lov")
export default class LovController {
  @operation({
    summary: "Get Lov",
  })
  @get()
  static getLov = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lov",
  })
  @post("{id}")
  static createLov = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
