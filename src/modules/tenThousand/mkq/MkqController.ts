import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mkqs")
export default class MkqController {
  @operation({
    summary: "Get Mkqs",
  })
  @get()
  static getMkqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mkq",
  })
  @post("{id}")
  static createMkq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
