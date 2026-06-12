import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("npm")
export default class NpmController {
  @operation({
    summary: "Get Npm",
  })
  @get()
  static getNpm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Npm",
  })
  @post("{id}")
  static createNpm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
