import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ezis")
export default class EziController {
  @operation({
    summary: "Get Ezis",
  })
  @get()
  static getEzis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ezi",
  })
  @post("{id}")
  static createEzi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
