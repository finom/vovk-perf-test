import { procedure, prefix, get, post, operation } from "vovk";

@prefix("klo")
export default class KloController {
  @operation({
    summary: "Get Klo",
  })
  @get()
  static getKlo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Klo",
  })
  @post("{id}")
  static createKlo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
