import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jjq")
export default class JjqController {
  @operation({
    summary: "Get Jjq",
  })
  @get()
  static getJjq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jjq",
  })
  @post("{id}")
  static createJjq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
