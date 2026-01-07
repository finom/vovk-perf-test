import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gc")
export default class GcController {
  @operation({
    summary: "Get Gc",
  })
  @get()
  static getGc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gc",
  })
  @post("{id}")
  static createGc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
