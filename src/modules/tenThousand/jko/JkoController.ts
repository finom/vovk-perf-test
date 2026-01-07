import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jko")
export default class JkoController {
  @operation({
    summary: "Get Jko",
  })
  @get()
  static getJko = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jko",
  })
  @post("{id}")
  static createJko = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
