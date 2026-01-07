import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gql")
export default class GqlController {
  @operation({
    summary: "Get Gql",
  })
  @get()
  static getGql = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gql",
  })
  @post("{id}")
  static createGql = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
