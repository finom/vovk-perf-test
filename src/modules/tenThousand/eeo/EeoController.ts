import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eeo")
export default class EeoController {
  @operation({
    summary: "Get Eeo",
  })
  @get()
  static getEeo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eeo",
  })
  @post("{id}")
  static createEeo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
