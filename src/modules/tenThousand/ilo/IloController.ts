import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ilo")
export default class IloController {
  @operation({
    summary: "Get Ilo",
  })
  @get()
  static getIlo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ilo",
  })
  @post("{id}")
  static createIlo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
