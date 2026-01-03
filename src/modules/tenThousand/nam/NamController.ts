import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nams")
export default class NamController {
  @operation({
    summary: "Get Nams",
  })
  @get()
  static getNams = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nam",
  })
  @post("{id}")
  static createNam = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
