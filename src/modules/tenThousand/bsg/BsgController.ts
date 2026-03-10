import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bsg")
export default class BsgController {
  @operation({
    summary: "Get Bsg",
  })
  @get()
  static getBsg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bsg",
  })
  @post("{id}")
  static createBsg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
