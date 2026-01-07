import { procedure, prefix, get, post, operation } from "vovk";

@prefix("int")
export default class IntController {
  @operation({
    summary: "Get Int",
  })
  @get()
  static getInt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Int",
  })
  @post("{id}")
  static createInt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
