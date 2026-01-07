import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ela")
export default class ElaController {
  @operation({
    summary: "Get Ela",
  })
  @get()
  static getEla = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ela",
  })
  @post("{id}")
  static createEla = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
