import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fhp")
export default class FhpController {
  @operation({
    summary: "Get Fhp",
  })
  @get()
  static getFhp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fhp",
  })
  @post("{id}")
  static createFhp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
