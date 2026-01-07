import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gah")
export default class GahController {
  @operation({
    summary: "Get Gah",
  })
  @get()
  static getGah = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gah",
  })
  @post("{id}")
  static createGah = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
