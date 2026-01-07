import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jlf")
export default class JlfController {
  @operation({
    summary: "Get Jlf",
  })
  @get()
  static getJlf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jlf",
  })
  @post("{id}")
  static createJlf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
