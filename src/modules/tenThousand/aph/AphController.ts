import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aph")
export default class AphController {
  @operation({
    summary: "Get Aph",
  })
  @get()
  static getAph = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aph",
  })
  @post("{id}")
  static createAph = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
