import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fhd")
export default class FhdController {
  @operation({
    summary: "Get Fhd",
  })
  @get()
  static getFhd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fhd",
  })
  @post("{id}")
  static createFhd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
