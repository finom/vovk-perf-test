import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nbn")
export default class NbnController {
  @operation({
    summary: "Get Nbn",
  })
  @get()
  static getNbn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nbn",
  })
  @post("{id}")
  static createNbn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
