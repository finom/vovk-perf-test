import { procedure, prefix, get, post, operation } from "vovk";

@prefix("brh")
export default class BrhController {
  @operation({
    summary: "Get Brh",
  })
  @get()
  static getBrh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Brh",
  })
  @post("{id}")
  static createBrh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
