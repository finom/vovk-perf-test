import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hrz")
export default class HrzController {
  @operation({
    summary: "Get Hrz",
  })
  @get()
  static getHrz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hrz",
  })
  @post("{id}")
  static createHrz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
