import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jdz")
export default class JdzController {
  @operation({
    summary: "Get Jdz",
  })
  @get()
  static getJdz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jdz",
  })
  @post("{id}")
  static createJdz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
