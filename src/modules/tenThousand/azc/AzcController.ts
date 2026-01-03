import { procedure, prefix, get, post, operation } from "vovk";

@prefix("azcs")
export default class AzcController {
  @operation({
    summary: "Get Azcs",
  })
  @get()
  static getAzcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Azc",
  })
  @post("{id}")
  static createAzc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
