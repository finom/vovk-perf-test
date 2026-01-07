import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ahg")
export default class AhgController {
  @operation({
    summary: "Get Ahg",
  })
  @get()
  static getAhg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ahg",
  })
  @post("{id}")
  static createAhg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
