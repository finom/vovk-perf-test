import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fbc")
export default class FbcController {
  @operation({
    summary: "Get Fbc",
  })
  @get()
  static getFbc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fbc",
  })
  @post("{id}")
  static createFbc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
