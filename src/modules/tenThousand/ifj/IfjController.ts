import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ifj")
export default class IfjController {
  @operation({
    summary: "Get Ifj",
  })
  @get()
  static getIfj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ifj",
  })
  @post("{id}")
  static createIfj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
