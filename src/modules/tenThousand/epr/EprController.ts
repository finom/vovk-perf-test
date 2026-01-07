import { procedure, prefix, get, post, operation } from "vovk";

@prefix("epr")
export default class EprController {
  @operation({
    summary: "Get Epr",
  })
  @get()
  static getEpr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Epr",
  })
  @post("{id}")
  static createEpr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
