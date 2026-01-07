import { procedure, prefix, get, post, operation } from "vovk";

@prefix("enx")
export default class EnxController {
  @operation({
    summary: "Get Enx",
  })
  @get()
  static getEnx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Enx",
  })
  @post("{id}")
  static createEnx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
