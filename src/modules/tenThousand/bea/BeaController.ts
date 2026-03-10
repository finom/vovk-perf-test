import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bea")
export default class BeaController {
  @operation({
    summary: "Get Bea",
  })
  @get()
  static getBea = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bea",
  })
  @post("{id}")
  static createBea = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
