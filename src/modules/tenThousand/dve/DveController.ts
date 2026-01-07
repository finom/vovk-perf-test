import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dve")
export default class DveController {
  @operation({
    summary: "Get Dve",
  })
  @get()
  static getDve = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dve",
  })
  @post("{id}")
  static createDve = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
