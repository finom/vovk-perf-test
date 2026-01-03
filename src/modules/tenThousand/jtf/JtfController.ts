import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jtfs")
export default class JtfController {
  @operation({
    summary: "Get Jtfs",
  })
  @get()
  static getJtfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jtf",
  })
  @post("{id}")
  static createJtf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
