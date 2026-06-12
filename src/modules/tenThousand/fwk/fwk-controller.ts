import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fwk")
export default class FwkController {
  @operation({
    summary: "Get Fwk",
  })
  @get()
  static getFwk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fwk",
  })
  @post("{id}")
  static createFwk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
