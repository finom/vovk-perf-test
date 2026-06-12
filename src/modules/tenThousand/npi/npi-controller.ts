import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("npi")
export default class NpiController {
  @operation({
    summary: "Get Npi",
  })
  @get()
  static getNpi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Npi",
  })
  @post("{id}")
  static createNpi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
