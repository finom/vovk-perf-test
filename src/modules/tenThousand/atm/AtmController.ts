import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("atm")
export default class AtmController {
  @operation({
    summary: "Get Atm",
  })
  @get()
  static getAtm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Atm",
  })
  @post("{id}")
  static createAtm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
