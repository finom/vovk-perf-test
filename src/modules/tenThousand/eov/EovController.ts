import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eovs")
export default class EovController {
  @operation({
    summary: "Get Eovs",
  })
  @get()
  static getEovs = procedure({
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
