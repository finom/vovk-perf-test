import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lin")
export default class LinController {
  @operation({
    summary: "Get Lin",
  })
  @get()
  static getLin = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lin",
  })
  @post("{id}")
  static createLin = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
