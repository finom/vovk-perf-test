import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jdc")
export default class JdcController {
  @operation({
    summary: "Get Jdc",
  })
  @get()
  static getJdc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jdc",
  })
  @post("{id}")
  static createJdc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
