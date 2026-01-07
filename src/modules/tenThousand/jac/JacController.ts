import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jac")
export default class JacController {
  @operation({
    summary: "Get Jac",
  })
  @get()
  static getJac = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jac",
  })
  @post("{id}")
  static createJac = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
