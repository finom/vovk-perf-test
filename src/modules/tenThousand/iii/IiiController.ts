import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iii")
export default class IiiController {
  @operation({
    summary: "Get Iii",
  })
  @get()
  static getIii = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iii",
  })
  @post("{id}")
  static createIii = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
