import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iehs")
export default class IehController {
  @operation({
    summary: "Get Iehs",
  })
  @get()
  static getIehs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ieh",
  })
  @post("{id}")
  static createIeh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
