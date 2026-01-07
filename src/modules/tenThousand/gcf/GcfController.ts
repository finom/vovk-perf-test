import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gcf")
export default class GcfController {
  @operation({
    summary: "Get Gcf",
  })
  @get()
  static getGcf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gcf",
  })
  @post("{id}")
  static createGcf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
