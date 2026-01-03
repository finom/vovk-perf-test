import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hbas")
export default class HbaController {
  @operation({
    summary: "Get Hbas",
  })
  @get()
  static getHbas = procedure({
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
