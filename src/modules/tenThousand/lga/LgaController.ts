import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lga")
export default class LgaController {
  @operation({
    summary: "Get Lga",
  })
  @get()
  static getLga = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lga",
  })
  @post("{id}")
  static createLga = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
