import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iins")
export default class IinController {
  @operation({
    summary: "Get Iins",
  })
  @get()
  static getIins = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iin",
  })
  @post("{id}")
  static createIin = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
