import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dnw")
export default class DnwController {
  @operation({
    summary: "Get Dnw",
  })
  @get()
  static getDnw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dnw",
  })
  @post("{id}")
  static createDnw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
