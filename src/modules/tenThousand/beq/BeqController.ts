import { procedure, prefix, get, post, operation } from "vovk";

@prefix("beq")
export default class BeqController {
  @operation({
    summary: "Get Beq",
  })
  @get()
  static getBeq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Beq",
  })
  @post("{id}")
  static createBeq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
