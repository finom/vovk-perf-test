import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jjh")
export default class JjhController {
  @operation({
    summary: "Get Jjh",
  })
  @get()
  static getJjh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jjh",
  })
  @post("{id}")
  static createJjh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
