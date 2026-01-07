import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aqn")
export default class AqnController {
  @operation({
    summary: "Get Aqn",
  })
  @get()
  static getAqn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aqn",
  })
  @post("{id}")
  static createAqn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
