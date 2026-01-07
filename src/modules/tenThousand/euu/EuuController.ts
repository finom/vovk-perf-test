import { procedure, prefix, get, post, operation } from "vovk";

@prefix("euu")
export default class EuuController {
  @operation({
    summary: "Get Euu",
  })
  @get()
  static getEuu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Euu",
  })
  @post("{id}")
  static createEuu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
