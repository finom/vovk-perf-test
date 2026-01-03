import { procedure, prefix, get, post, operation } from "vovk";

@prefix("npds")
export default class NpdController {
  @operation({
    summary: "Get Npds",
  })
  @get()
  static getNpds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Npd",
  })
  @post("{id}")
  static createNpd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
