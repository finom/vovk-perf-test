import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eln")
export default class ElnController {
  @operation({
    summary: "Get Eln",
  })
  @get()
  static getEln = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eln",
  })
  @post("{id}")
  static createEln = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
