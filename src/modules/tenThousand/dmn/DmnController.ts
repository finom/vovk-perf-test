import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dmn")
export default class DmnController {
  @operation({
    summary: "Get Dmn",
  })
  @get()
  static getDmn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dmn",
  })
  @post("{id}")
  static createDmn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
