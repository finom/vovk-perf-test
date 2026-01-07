import { procedure, prefix, get, post, operation } from "vovk";

@prefix("se")
export default class SeController {
  @operation({
    summary: "Get Se",
  })
  @get()
  static getSe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Se",
  })
  @post("{id}")
  static createSe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
