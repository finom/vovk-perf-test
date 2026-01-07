import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kmi")
export default class KmiController {
  @operation({
    summary: "Get Kmi",
  })
  @get()
  static getKmi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kmi",
  })
  @post("{id}")
  static createKmi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
