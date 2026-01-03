import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aahs")
export default class AahController {
  @operation({
    summary: "Get Aahs",
  })
  @get()
  static getAahs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aah",
  })
  @post("{id}")
  static createAah = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
