import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ngi")
export default class NgiController {
  @operation({
    summary: "Get Ngi",
  })
  @get()
  static getNgi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ngi",
  })
  @post("{id}")
  static createNgi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
