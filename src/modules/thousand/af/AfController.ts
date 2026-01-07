import { procedure, prefix, get, post, operation } from "vovk";

@prefix("af")
export default class AfController {
  @operation({
    summary: "Get Af",
  })
  @get()
  static getAf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Af",
  })
  @post("{id}")
  static createAf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
