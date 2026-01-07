import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cdy")
export default class CdyController {
  @operation({
    summary: "Get Cdy",
  })
  @get()
  static getCdy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cdy",
  })
  @post("{id}")
  static createCdy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
