import { procedure, prefix, get, post, operation } from "vovk";

@prefix("sy")
export default class SyController {
  @operation({
    summary: "Get Sy",
  })
  @get()
  static getSy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Sy",
  })
  @post("{id}")
  static createSy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
