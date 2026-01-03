import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iigs")
export default class IigController {
  @operation({
    summary: "Get Iigs",
  })
  @get()
  static getIigs = procedure({
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
