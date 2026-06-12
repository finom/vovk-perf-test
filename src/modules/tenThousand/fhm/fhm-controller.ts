import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fhm")
export default class FhmController {
  @operation({
    summary: "Get Fhm",
  })
  @get()
  static getFhm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fhm",
  })
  @post("{id}")
  static createFhm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
