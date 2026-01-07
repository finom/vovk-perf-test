import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jfh")
export default class JfhController {
  @operation({
    summary: "Get Jfh",
  })
  @get()
  static getJfh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jfh",
  })
  @post("{id}")
  static createJfh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
