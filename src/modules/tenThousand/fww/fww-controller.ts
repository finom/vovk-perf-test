import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fww")
export default class FwwController {
  @operation({
    summary: "Get Fww",
  })
  @get()
  static getFww = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fww",
  })
  @post("{id}")
  static createFww = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
