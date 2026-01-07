import { procedure, prefix, get, post, operation } from "vovk";

@prefix("din")
export default class DinController {
  @operation({
    summary: "Get Din",
  })
  @get()
  static getDin = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Din",
  })
  @post("{id}")
  static createDin = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
