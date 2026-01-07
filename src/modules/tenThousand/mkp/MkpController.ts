import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mkp")
export default class MkpController {
  @operation({
    summary: "Get Mkp",
  })
  @get()
  static getMkp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mkp",
  })
  @post("{id}")
  static createMkp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
