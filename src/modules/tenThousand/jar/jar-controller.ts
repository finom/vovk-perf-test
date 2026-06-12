import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jar")
export default class JarController {
  @operation({
    summary: "Get Jar",
  })
  @get()
  static getJar = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jar",
  })
  @post("{id}")
  static createJar = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
