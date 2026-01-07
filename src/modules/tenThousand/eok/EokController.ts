import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eok")
export default class EokController {
  @operation({
    summary: "Get Eok",
  })
  @get()
  static getEok = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eok",
  })
  @post("{id}")
  static createEok = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
