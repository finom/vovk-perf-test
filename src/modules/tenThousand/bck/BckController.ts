import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bck")
export default class BckController {
  @operation({
    summary: "Get Bck",
  })
  @get()
  static getBck = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bck",
  })
  @post("{id}")
  static createBck = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
