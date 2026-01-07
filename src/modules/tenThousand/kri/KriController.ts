import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kri")
export default class KriController {
  @operation({
    summary: "Get Kri",
  })
  @get()
  static getKri = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kri",
  })
  @post("{id}")
  static createKri = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
