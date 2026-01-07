import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eov")
export default class EovController {
  @operation({
    summary: "Get Eov",
  })
  @get()
  static getEov = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eov",
  })
  @post("{id}")
  static createEov = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
