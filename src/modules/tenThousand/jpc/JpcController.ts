import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jpcs")
export default class JpcController {
  @operation({
    summary: "Get Jpcs",
  })
  @get()
  static getJpcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jpc",
  })
  @post("{id}")
  static createJpc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
