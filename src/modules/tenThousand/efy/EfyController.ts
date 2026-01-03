import { procedure, prefix, get, post, operation } from "vovk";

@prefix("efies")
export default class EfyController {
  @operation({
    summary: "Get Efies",
  })
  @get()
  static getEfies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Efy",
  })
  @post("{id}")
  static createEfy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
