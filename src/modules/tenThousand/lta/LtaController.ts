import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lta")
export default class LtaController {
  @operation({
    summary: "Get Lta",
  })
  @get()
  static getLta = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lta",
  })
  @post("{id}")
  static createLta = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
