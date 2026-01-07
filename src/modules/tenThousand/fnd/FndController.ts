import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fnd")
export default class FndController {
  @operation({
    summary: "Get Fnd",
  })
  @get()
  static getFnd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fnd",
  })
  @post("{id}")
  static createFnd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
