import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kg")
export default class KgController {
  @operation({
    summary: "Get Kg",
  })
  @get()
  static getKg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kg",
  })
  @post("{id}")
  static createKg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
