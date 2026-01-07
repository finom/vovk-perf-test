import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iym")
export default class IymController {
  @operation({
    summary: "Get Iym",
  })
  @get()
  static getIym = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iym",
  })
  @post("{id}")
  static createIym = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
