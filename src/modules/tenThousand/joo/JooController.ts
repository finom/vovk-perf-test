import { procedure, prefix, get, post, operation } from "vovk";

@prefix("joo")
export default class JooController {
  @operation({
    summary: "Get Joo",
  })
  @get()
  static getJoo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Joo",
  })
  @post("{id}")
  static createJoo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
