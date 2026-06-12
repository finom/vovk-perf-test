import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nok")
export default class NokController {
  @operation({
    summary: "Get Nok",
  })
  @get()
  static getNok = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nok",
  })
  @post("{id}")
  static createNok = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
