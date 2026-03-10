import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mep")
export default class MepController {
  @operation({
    summary: "Get Mep",
  })
  @get()
  static getMep = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mep",
  })
  @post("{id}")
  static createMep = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
