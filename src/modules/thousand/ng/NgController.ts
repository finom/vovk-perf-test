import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ng")
export default class NgController {
  @operation({
    summary: "Get Ng",
  })
  @get()
  static getNg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ng",
  })
  @post("{id}")
  static createNg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
