import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iep")
export default class IepController {
  @operation({
    summary: "Get Iep",
  })
  @get()
  static getIep = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iep",
  })
  @post("{id}")
  static createIep = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
