import { procedure, prefix, get, post, operation } from "vovk";

@prefix("huf")
export default class HufController {
  @operation({
    summary: "Get Huf",
  })
  @get()
  static getHuf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Huf",
  })
  @post("{id}")
  static createHuf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
