import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gaws")
export default class GawController {
  @operation({
    summary: "Get Gaws",
  })
  @get()
  static getGaws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gaw",
  })
  @post("{id}")
  static createGaw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
