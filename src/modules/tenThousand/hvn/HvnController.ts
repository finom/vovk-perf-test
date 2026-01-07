import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hvn")
export default class HvnController {
  @operation({
    summary: "Get Hvn",
  })
  @get()
  static getHvn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hvn",
  })
  @post("{id}")
  static createHvn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
