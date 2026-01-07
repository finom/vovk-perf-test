import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jbo")
export default class JboController {
  @operation({
    summary: "Get Jbo",
  })
  @get()
  static getJbo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jbo",
  })
  @post("{id}")
  static createJbo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
