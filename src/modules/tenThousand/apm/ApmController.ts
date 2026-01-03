import { procedure, prefix, get, post, operation } from "vovk";

@prefix("apms")
export default class ApmController {
  @operation({
    summary: "Get Apms",
  })
  @get()
  static getApms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Apm",
  })
  @post("{id}")
  static createApm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
