import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iocs")
export default class IocController {
  @operation({
    summary: "Get Iocs",
  })
  @get()
  static getIocs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ioc",
  })
  @post("{id}")
  static createIoc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
