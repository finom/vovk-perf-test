import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ber")
export default class BerController {
  @operation({
    summary: "Get Ber",
  })
  @get()
  static getBer = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ber",
  })
  @post("{id}")
  static createBer = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
