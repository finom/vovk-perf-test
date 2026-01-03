import { procedure, prefix, get, post, operation } from "vovk";

@prefix("flves")
export default class FlfController {
  @operation({
    summary: "Get Flves",
  })
  @get()
  static getFlves = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Flf",
  })
  @post("{id}")
  static createFlf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
