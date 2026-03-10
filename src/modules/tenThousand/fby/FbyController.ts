import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fby")
export default class FbyController {
  @operation({
    summary: "Get Fby",
  })
  @get()
  static getFby = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fby",
  })
  @post("{id}")
  static createFby = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
