import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iig")
export default class IigController {
  @operation({
    summary: "Get Iig",
  })
  @get()
  static getIig = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iig",
  })
  @post("{id}")
  static createIig = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
