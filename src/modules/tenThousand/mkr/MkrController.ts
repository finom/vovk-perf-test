import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mkrs")
export default class MkrController {
  @operation({
    summary: "Get Mkrs",
  })
  @get()
  static getMkrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mkr",
  })
  @post("{id}")
  static createMkr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
