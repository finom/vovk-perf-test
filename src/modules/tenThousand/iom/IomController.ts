import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iom")
export default class IomController {
  @operation({
    summary: "Get Iom",
  })
  @get()
  static getIom = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iom",
  })
  @post("{id}")
  static createIom = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
