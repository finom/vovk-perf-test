import { procedure, prefix, get, post, operation } from "vovk";

@prefix("akm")
export default class AkmController {
  @operation({
    summary: "Get Akm",
  })
  @get()
  static getAkm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Akm",
  })
  @post("{id}")
  static createAkm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
