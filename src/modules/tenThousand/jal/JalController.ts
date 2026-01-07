import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jal")
export default class JalController {
  @operation({
    summary: "Get Jal",
  })
  @get()
  static getJal = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jal",
  })
  @post("{id}")
  static createJal = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
