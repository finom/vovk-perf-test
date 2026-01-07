import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fsy")
export default class FsyController {
  @operation({
    summary: "Get Fsy",
  })
  @get()
  static getFsy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fsy",
  })
  @post("{id}")
  static createFsy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
