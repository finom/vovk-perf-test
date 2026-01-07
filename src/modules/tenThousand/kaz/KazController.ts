import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kaz")
export default class KazController {
  @operation({
    summary: "Get Kaz",
  })
  @get()
  static getKaz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kaz",
  })
  @post("{id}")
  static createKaz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
