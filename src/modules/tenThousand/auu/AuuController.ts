import { procedure, prefix, get, post, operation } from "vovk";

@prefix("auu")
export default class AuuController {
  @operation({
    summary: "Get Auu",
  })
  @get()
  static getAuu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Auu",
  })
  @post("{id}")
  static createAuu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
