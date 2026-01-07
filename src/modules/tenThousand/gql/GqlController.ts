import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gql")
export default class GqlController {
  @operation({
    summary: "Get Gql",
  })
  @get()
  static getGql = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gql",
  })
  @post("{id}")
  static createGql = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
