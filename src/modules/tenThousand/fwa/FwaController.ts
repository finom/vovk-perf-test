import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fwa")
export default class FwaController {
  @operation({
    summary: "Get Fwa",
  })
  @get()
  static getFwa = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fwa",
  })
  @post("{id}")
  static createFwa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
