import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("frb")
export default class FrbController {
  @operation({
    summary: "Get Frb",
  })
  @get()
  static getFrb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Frb",
  })
  @post("{id}")
  static createFrb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
