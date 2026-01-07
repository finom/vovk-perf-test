import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dym")
export default class DymController {
  @operation({
    summary: "Get Dym",
  })
  @get()
  static getDym = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dym",
  })
  @post("{id}")
  static createDym = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
