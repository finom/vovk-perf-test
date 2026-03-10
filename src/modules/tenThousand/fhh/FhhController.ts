import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fhh")
export default class FhhController {
  @operation({
    summary: "Get Fhh",
  })
  @get()
  static getFhh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fhh",
  })
  @post("{id}")
  static createFhh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
