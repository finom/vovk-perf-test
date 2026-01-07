import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dck")
export default class DckController {
  @operation({
    summary: "Get Dck",
  })
  @get()
  static getDck = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dck",
  })
  @post("{id}")
  static createDck = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
