import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fvl")
export default class FvlController {
  @operation({
    summary: "Get Fvl",
  })
  @get()
  static getFvl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fvl",
  })
  @post("{id}")
  static createFvl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
