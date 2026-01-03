import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eohs")
export default class EohController {
  @operation({
    summary: "Get Eohs",
  })
  @get()
  static getEohs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eoh",
  })
  @post("{id}")
  static createEoh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
