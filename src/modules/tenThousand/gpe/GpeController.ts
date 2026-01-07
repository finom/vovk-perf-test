import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gpe")
export default class GpeController {
  @operation({
    summary: "Get Gpe",
  })
  @get()
  static getGpe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gpe",
  })
  @post("{id}")
  static createGpe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
