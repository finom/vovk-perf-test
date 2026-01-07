import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ecr")
export default class EcrController {
  @operation({
    summary: "Get Ecr",
  })
  @get()
  static getEcr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ecr",
  })
  @post("{id}")
  static createEcr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
