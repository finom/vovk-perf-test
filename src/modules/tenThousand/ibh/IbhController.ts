import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ibhs")
export default class IbhController {
  @operation({
    summary: "Get Ibhs",
  })
  @get()
  static getIbhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ibh",
  })
  @post("{id}")
  static createIbh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
