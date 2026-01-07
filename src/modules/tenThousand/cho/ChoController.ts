import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cho")
export default class ChoController {
  @operation({
    summary: "Get Cho",
  })
  @get()
  static getCho = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cho",
  })
  @post("{id}")
  static createCho = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
