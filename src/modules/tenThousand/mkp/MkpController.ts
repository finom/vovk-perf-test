import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mkps")
export default class MkpController {
  @operation({
    summary: "Get Mkps",
  })
  @get()
  static getMkps = procedure({
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
