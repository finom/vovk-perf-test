import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cox")
export default class CoxController {
  @operation({
    summary: "Get Cox",
  })
  @get()
  static getCox = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cox",
  })
  @post("{id}")
  static createCox = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
