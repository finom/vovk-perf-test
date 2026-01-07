import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ass")
export default class AssController {
  @operation({
    summary: "Get Ass",
  })
  @get()
  static getAss = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ass",
  })
  @post("{id}")
  static createAss = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
