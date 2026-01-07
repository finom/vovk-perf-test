import { procedure, prefix, get, post, operation } from "vovk";

@prefix("drh")
export default class DrhController {
  @operation({
    summary: "Get Drh",
  })
  @get()
  static getDrh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Drh",
  })
  @post("{id}")
  static createDrh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
