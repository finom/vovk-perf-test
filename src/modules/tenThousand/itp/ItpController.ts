import { procedure, prefix, get, post, operation } from "vovk";

@prefix("itp")
export default class ItpController {
  @operation({
    summary: "Get Itp",
  })
  @get()
  static getItp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Itp",
  })
  @post("{id}")
  static createItp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
