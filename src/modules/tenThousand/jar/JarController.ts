import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jar")
export default class JarController {
  @operation({
    summary: "Get Jar",
  })
  @get()
  static getJar = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jar",
  })
  @post("{id}")
  static createJar = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
