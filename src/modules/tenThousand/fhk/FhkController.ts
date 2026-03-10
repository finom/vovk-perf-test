import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fhk")
export default class FhkController {
  @operation({
    summary: "Get Fhk",
  })
  @get()
  static getFhk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fhk",
  })
  @post("{id}")
  static createFhk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
