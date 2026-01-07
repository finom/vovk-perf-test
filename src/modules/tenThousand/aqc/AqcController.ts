import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aqc")
export default class AqcController {
  @operation({
    summary: "Get Aqc",
  })
  @get()
  static getAqc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aqc",
  })
  @post("{id}")
  static createAqc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
