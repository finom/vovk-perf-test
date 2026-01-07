import { procedure, prefix, get, post, operation } from "vovk";

@prefix("adf")
export default class AdfController {
  @operation({
    summary: "Get Adf",
  })
  @get()
  static getAdf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Adf",
  })
  @post("{id}")
  static createAdf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
