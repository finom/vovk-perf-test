import { procedure, prefix, get, post, operation } from "vovk";

@prefix("enf")
export default class EnfController {
  @operation({
    summary: "Get Enf",
  })
  @get()
  static getEnf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Enf",
  })
  @post("{id}")
  static createEnf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
