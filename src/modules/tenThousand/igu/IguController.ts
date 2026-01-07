import { procedure, prefix, get, post, operation } from "vovk";

@prefix("igu")
export default class IguController {
  @operation({
    summary: "Get Igu",
  })
  @get()
  static getIgu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Igu",
  })
  @post("{id}")
  static createIgu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
