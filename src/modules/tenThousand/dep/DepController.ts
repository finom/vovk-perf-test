import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dep")
export default class DepController {
  @operation({
    summary: "Get Dep",
  })
  @get()
  static getDep = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dep",
  })
  @post("{id}")
  static createDep = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
