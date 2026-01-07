import { procedure, prefix, get, post, operation } from "vovk";

@prefix("emc")
export default class EmcController {
  @operation({
    summary: "Get Emc",
  })
  @get()
  static getEmc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Emc",
  })
  @post("{id}")
  static createEmc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
