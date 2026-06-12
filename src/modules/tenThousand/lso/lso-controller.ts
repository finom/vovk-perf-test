import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lso")
export default class LsoController {
  @operation({
    summary: "Get Lso",
  })
  @get()
  static getLso = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lso",
  })
  @post("{id}")
  static createLso = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
