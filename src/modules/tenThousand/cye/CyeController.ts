import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cye")
export default class CyeController {
  @operation({
    summary: "Get Cye",
  })
  @get()
  static getCye = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cye",
  })
  @post("{id}")
  static createCye = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
