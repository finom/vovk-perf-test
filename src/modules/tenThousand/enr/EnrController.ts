import { procedure, prefix, get, post, operation } from "vovk";

@prefix("enr")
export default class EnrController {
  @operation({
    summary: "Get Enr",
  })
  @get()
  static getEnr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Enr",
  })
  @post("{id}")
  static createEnr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
