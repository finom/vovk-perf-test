import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aeys")
export default class AeyController {
  @operation({
    summary: "Get Aeys",
  })
  @get()
  static getAeys = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aey",
  })
  @post("{id}")
  static createAey = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
