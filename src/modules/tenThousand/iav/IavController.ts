import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iav")
export default class IavController {
  @operation({
    summary: "Get Iav",
  })
  @get()
  static getIav = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iav",
  })
  @post("{id}")
  static createIav = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
