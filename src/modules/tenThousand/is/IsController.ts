import { procedure, prefix, get, post, operation } from "vovk";

@prefix("is")
export default class IsController {
  @operation({
    summary: "Get Is",
  })
  @get()
  static getIs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Is",
  })
  @post("{id}")
  static createIs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
