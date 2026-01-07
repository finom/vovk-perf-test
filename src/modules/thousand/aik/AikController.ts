import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aik")
export default class AikController {
  @operation({
    summary: "Get Aik",
  })
  @get()
  static getAik = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aik",
  })
  @post("{id}")
  static createAik = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
