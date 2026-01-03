import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iits")
export default class IitController {
  @operation({
    summary: "Get Iits",
  })
  @get()
  static getIits = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iit",
  })
  @post("{id}")
  static createIit = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
