import { procedure, prefix, get, post, operation } from "vovk";

@prefix("asf")
export default class AsfController {
  @operation({
    summary: "Get Asf",
  })
  @get()
  static getAsf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Asf",
  })
  @post("{id}")
  static createAsf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
