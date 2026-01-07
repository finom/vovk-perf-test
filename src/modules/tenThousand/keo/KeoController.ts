import { procedure, prefix, get, post, operation } from "vovk";

@prefix("keo")
export default class KeoController {
  @operation({
    summary: "Get Keo",
  })
  @get()
  static getKeo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Keo",
  })
  @post("{id}")
  static createKeo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
