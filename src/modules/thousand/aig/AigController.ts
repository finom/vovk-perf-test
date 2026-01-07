import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aig")
export default class AigController {
  @operation({
    summary: "Get Aig",
  })
  @get()
  static getAig = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aig",
  })
  @post("{id}")
  static createAig = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
