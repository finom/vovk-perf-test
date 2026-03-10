import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("sb")
export default class SbController {
  @operation({
    summary: "Get Sb",
  })
  @get()
  static getSb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Sb",
  })
  @post("{id}")
  static createSb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
