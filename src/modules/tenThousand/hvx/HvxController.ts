import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hvx")
export default class HvxController {
  @operation({
    summary: "Get Hvx",
  })
  @get()
  static getHvx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hvx",
  })
  @post("{id}")
  static createHvx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
