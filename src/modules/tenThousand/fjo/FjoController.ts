import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fjo")
export default class FjoController {
  @operation({
    summary: "Get Fjo",
  })
  @get()
  static getFjo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fjo",
  })
  @post("{id}")
  static createFjo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
