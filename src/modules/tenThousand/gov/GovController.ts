import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gov")
export default class GovController {
  @operation({
    summary: "Get Gov",
  })
  @get()
  static getGov = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gov",
  })
  @post("{id}")
  static createGov = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
