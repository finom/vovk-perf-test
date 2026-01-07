import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jfz")
export default class JfzController {
  @operation({
    summary: "Get Jfz",
  })
  @get()
  static getJfz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jfz",
  })
  @post("{id}")
  static createJfz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
