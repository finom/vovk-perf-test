import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gcn")
export default class GcnController {
  @operation({
    summary: "Get Gcn",
  })
  @get()
  static getGcn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gcn",
  })
  @post("{id}")
  static createGcn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
