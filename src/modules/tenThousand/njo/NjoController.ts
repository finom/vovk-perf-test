import { procedure, prefix, get, post, operation } from "vovk";

@prefix("njo")
export default class NjoController {
  @operation({
    summary: "Get Njo",
  })
  @get()
  static getNjo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Njo",
  })
  @post("{id}")
  static createNjo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
