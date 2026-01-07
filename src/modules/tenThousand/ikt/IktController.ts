import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ikt")
export default class IktController {
  @operation({
    summary: "Get Ikt",
  })
  @get()
  static getIkt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ikt",
  })
  @post("{id}")
  static createIkt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
