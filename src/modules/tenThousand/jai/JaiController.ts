import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jai")
export default class JaiController {
  @operation({
    summary: "Get Jai",
  })
  @get()
  static getJai = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jai",
  })
  @post("{id}")
  static createJai = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
