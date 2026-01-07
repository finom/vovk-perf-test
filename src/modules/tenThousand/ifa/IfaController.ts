import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ifa")
export default class IfaController {
  @operation({
    summary: "Get Ifa",
  })
  @get()
  static getIfa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ifa",
  })
  @post("{id}")
  static createIfa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
