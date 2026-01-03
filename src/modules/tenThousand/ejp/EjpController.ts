import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ejps")
export default class EjpController {
  @operation({
    summary: "Get Ejps",
  })
  @get()
  static getEjps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ejp",
  })
  @post("{id}")
  static createEjp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
