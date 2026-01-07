import { procedure, prefix, get, post, operation } from "vovk";

@prefix("imf")
export default class ImfController {
  @operation({
    summary: "Get Imf",
  })
  @get()
  static getImf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Imf",
  })
  @post("{id}")
  static createImf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
