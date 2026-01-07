import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eiw")
export default class EiwController {
  @operation({
    summary: "Get Eiw",
  })
  @get()
  static getEiw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eiw",
  })
  @post("{id}")
  static createEiw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
