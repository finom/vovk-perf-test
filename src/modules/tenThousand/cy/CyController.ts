import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cy")
export default class CyController {
  @operation({
    summary: "Get Cy",
  })
  @get()
  static getCy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cy",
  })
  @post("{id}")
  static createCy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
