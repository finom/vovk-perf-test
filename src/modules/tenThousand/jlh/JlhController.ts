import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jlh")
export default class JlhController {
  @operation({
    summary: "Get Jlh",
  })
  @get()
  static getJlh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jlh",
  })
  @post("{id}")
  static createJlh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
