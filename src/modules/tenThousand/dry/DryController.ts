import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dry")
export default class DryController {
  @operation({
    summary: "Get Dry",
  })
  @get()
  static getDry = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dry",
  })
  @post("{id}")
  static createDry = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
