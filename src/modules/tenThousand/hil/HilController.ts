import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hil")
export default class HilController {
  @operation({
    summary: "Get Hil",
  })
  @get()
  static getHil = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hil",
  })
  @post("{id}")
  static createHil = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
