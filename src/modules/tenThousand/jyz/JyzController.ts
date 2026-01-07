import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jyz")
export default class JyzController {
  @operation({
    summary: "Get Jyz",
  })
  @get()
  static getJyz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jyz",
  })
  @post("{id}")
  static createJyz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
