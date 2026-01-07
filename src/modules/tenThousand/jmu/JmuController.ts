import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jmu")
export default class JmuController {
  @operation({
    summary: "Get Jmu",
  })
  @get()
  static getJmu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jmu",
  })
  @post("{id}")
  static createJmu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
