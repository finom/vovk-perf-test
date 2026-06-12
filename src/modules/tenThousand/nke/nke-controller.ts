import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nke")
export default class NkeController {
  @operation({
    summary: "Get Nke",
  })
  @get()
  static getNke = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nke",
  })
  @post("{id}")
  static createNke = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
