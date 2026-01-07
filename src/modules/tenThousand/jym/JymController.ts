import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jym")
export default class JymController {
  @operation({
    summary: "Get Jym",
  })
  @get()
  static getJym = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jym",
  })
  @post("{id}")
  static createJym = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
