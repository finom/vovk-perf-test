import { procedure, prefix, get, post, operation } from "vovk";

@prefix("des")
export default class DesController {
  @operation({
    summary: "Get Des",
  })
  @get()
  static getDes = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Des",
  })
  @post("{id}")
  static createDes = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
