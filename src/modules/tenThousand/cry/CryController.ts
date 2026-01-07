import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cry")
export default class CryController {
  @operation({
    summary: "Get Cry",
  })
  @get()
  static getCry = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cry",
  })
  @post("{id}")
  static createCry = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
