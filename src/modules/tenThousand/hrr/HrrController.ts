import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hrr")
export default class HrrController {
  @operation({
    summary: "Get Hrr",
  })
  @get()
  static getHrr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hrr",
  })
  @post("{id}")
  static createHrr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
