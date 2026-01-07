import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqf")
export default class JqfController {
  @operation({
    summary: "Get Jqf",
  })
  @get()
  static getJqf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jqf",
  })
  @post("{id}")
  static createJqf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
