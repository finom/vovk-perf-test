import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gec")
export default class GecController {
  @operation({
    summary: "Get Gec",
  })
  @get()
  static getGec = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gec",
  })
  @post("{id}")
  static createGec = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
