import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hba")
export default class HbaController {
  @operation({
    summary: "Get Hba",
  })
  @get()
  static getHba = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hba",
  })
  @post("{id}")
  static createHba = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
