import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dil")
export default class DilController {
  @operation({
    summary: "Get Dil",
  })
  @get()
  static getDil = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dil",
  })
  @post("{id}")
  static createDil = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
