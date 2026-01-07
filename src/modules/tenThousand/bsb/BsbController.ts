import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bsb")
export default class BsbController {
  @operation({
    summary: "Get Bsb",
  })
  @get()
  static getBsb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bsb",
  })
  @post("{id}")
  static createBsb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
