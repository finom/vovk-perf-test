import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fky")
export default class FkyController {
  @operation({
    summary: "Get Fky",
  })
  @get()
  static getFky = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fky",
  })
  @post("{id}")
  static createFky = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
