import { procedure, prefix, get, post, operation } from "vovk";

@prefix("auns")
export default class AunController {
  @operation({
    summary: "Get Auns",
  })
  @get()
  static getAuns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aun",
  })
  @post("{id}")
  static createAun = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
