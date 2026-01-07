import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ccz")
export default class CczController {
  @operation({
    summary: "Get Ccz",
  })
  @get()
  static getCcz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ccz",
  })
  @post("{id}")
  static createCcz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
