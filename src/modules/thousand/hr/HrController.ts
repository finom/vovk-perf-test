import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hr")
export default class HrController {
  @operation({
    summary: "Get Hr",
  })
  @get()
  static getHr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hr",
  })
  @post("{id}")
  static createHr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
