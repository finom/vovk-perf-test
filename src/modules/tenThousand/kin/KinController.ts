import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kins")
export default class KinController {
  @operation({
    summary: "Get Kins",
  })
  @get()
  static getKins = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kin",
  })
  @post("{id}")
  static createKin = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
