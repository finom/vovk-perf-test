import { procedure, prefix, get, post, operation } from "vovk";

@prefix("khh")
export default class KhhController {
  @operation({
    summary: "Get Khh",
  })
  @get()
  static getKhh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Khh",
  })
  @post("{id}")
  static createKhh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
