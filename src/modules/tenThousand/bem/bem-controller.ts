import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bem")
export default class BemController {
  @operation({
    summary: "Get Bem",
  })
  @get()
  static getBem = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bem",
  })
  @post("{id}")
  static createBem = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
