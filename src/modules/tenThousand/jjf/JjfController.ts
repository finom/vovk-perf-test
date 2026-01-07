import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jjf")
export default class JjfController {
  @operation({
    summary: "Get Jjf",
  })
  @get()
  static getJjf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jjf",
  })
  @post("{id}")
  static createJjf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
