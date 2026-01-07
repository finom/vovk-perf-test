import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lck")
export default class LckController {
  @operation({
    summary: "Get Lck",
  })
  @get()
  static getLck = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lck",
  })
  @post("{id}")
  static createLck = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
