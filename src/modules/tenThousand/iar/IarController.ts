import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iars")
export default class IarController {
  @operation({
    summary: "Get Iars",
  })
  @get()
  static getIars = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iar",
  })
  @post("{id}")
  static createIar = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
