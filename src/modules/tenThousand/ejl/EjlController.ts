import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ejls")
export default class EjlController {
  @operation({
    summary: "Get Ejls",
  })
  @get()
  static getEjls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ejl",
  })
  @post("{id}")
  static createEjl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
