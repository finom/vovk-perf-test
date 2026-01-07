import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bzi")
export default class BziController {
  @operation({
    summary: "Get Bzi",
  })
  @get()
  static getBzi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bzi",
  })
  @post("{id}")
  static createBzi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
