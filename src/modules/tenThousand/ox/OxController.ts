import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ox")
export default class OxController {
  @operation({
    summary: "Get Ox",
  })
  @get()
  static getOx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ox",
  })
  @post("{id}")
  static createOx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
