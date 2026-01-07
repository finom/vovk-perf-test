import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dlo")
export default class DloController {
  @operation({
    summary: "Get Dlo",
  })
  @get()
  static getDlo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dlo",
  })
  @post("{id}")
  static createDlo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
