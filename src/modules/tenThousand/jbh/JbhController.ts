import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jbh")
export default class JbhController {
  @operation({
    summary: "Get Jbh",
  })
  @get()
  static getJbh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jbh",
  })
  @post("{id}")
  static createJbh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
