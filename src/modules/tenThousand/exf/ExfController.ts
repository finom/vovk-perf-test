import { procedure, prefix, get, post, operation } from "vovk";

@prefix("exfs")
export default class ExfController {
  @operation({
    summary: "Get Exfs",
  })
  @get()
  static getExfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Exf",
  })
  @post("{id}")
  static createExf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
