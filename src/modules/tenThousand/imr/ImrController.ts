import { procedure, prefix, get, post, operation } from "vovk";

@prefix("imr")
export default class ImrController {
  @operation({
    summary: "Get Imr",
  })
  @get()
  static getImr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Imr",
  })
  @post("{id}")
  static createImr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
