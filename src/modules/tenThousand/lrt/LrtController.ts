import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lrt")
export default class LrtController {
  @operation({
    summary: "Get Lrt",
  })
  @get()
  static getLrt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lrt",
  })
  @post("{id}")
  static createLrt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
