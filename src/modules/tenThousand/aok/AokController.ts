import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aok")
export default class AokController {
  @operation({
    summary: "Get Aok",
  })
  @get()
  static getAok = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aok",
  })
  @post("{id}")
  static createAok = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
