import { procedure, prefix, get, post, operation } from "vovk";

@prefix("afp")
export default class AfpController {
  @operation({
    summary: "Get Afp",
  })
  @get()
  static getAfp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Afp",
  })
  @post("{id}")
  static createAfp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
