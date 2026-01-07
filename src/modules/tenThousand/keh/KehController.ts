import { procedure, prefix, get, post, operation } from "vovk";

@prefix("keh")
export default class KehController {
  @operation({
    summary: "Get Keh",
  })
  @get()
  static getKeh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Keh",
  })
  @post("{id}")
  static createKeh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
