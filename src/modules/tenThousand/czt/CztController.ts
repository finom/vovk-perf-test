import { procedure, prefix, get, post, operation } from "vovk";

@prefix("czt")
export default class CztController {
  @operation({
    summary: "Get Czt",
  })
  @get()
  static getCzt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Czt",
  })
  @post("{id}")
  static createCzt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
