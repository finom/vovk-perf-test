import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gaw")
export default class GawController {
  @operation({
    summary: "Get Gaw",
  })
  @get()
  static getGaw = procedure({
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
