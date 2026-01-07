import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jyn")
export default class JynController {
  @operation({
    summary: "Get Jyn",
  })
  @get()
  static getJyn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jyn",
  })
  @post("{id}")
  static createJyn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
