import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ihl")
export default class IhlController {
  @operation({
    summary: "Get Ihl",
  })
  @get()
  static getIhl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ihl",
  })
  @post("{id}")
  static createIhl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
