import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kji")
export default class KjiController {
  @operation({
    summary: "Get Kji",
  })
  @get()
  static getKji = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kji",
  })
  @post("{id}")
  static createKji = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
