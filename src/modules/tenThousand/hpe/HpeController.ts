import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hpe")
export default class HpeController {
  @operation({
    summary: "Get Hpe",
  })
  @get()
  static getHpe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hpe",
  })
  @post("{id}")
  static createHpe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
