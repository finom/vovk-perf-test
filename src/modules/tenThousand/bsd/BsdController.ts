import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bsd")
export default class BsdController {
  @operation({
    summary: "Get Bsd",
  })
  @get()
  static getBsd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bsd",
  })
  @post("{id}")
  static createBsd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
