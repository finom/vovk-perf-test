import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ifp")
export default class IfpController {
  @operation({
    summary: "Get Ifp",
  })
  @get()
  static getIfp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ifp",
  })
  @post("{id}")
  static createIfp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
