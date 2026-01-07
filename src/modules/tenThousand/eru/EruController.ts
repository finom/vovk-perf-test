import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eru")
export default class EruController {
  @operation({
    summary: "Get Eru",
  })
  @get()
  static getEru = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eru",
  })
  @post("{id}")
  static createEru = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
