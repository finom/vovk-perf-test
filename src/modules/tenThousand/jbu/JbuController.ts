import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jbu")
export default class JbuController {
  @operation({
    summary: "Get Jbu",
  })
  @get()
  static getJbu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jbu",
  })
  @post("{id}")
  static createJbu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
