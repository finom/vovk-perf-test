import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fwr")
export default class FwrController {
  @operation({
    summary: "Get Fwr",
  })
  @get()
  static getFwr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fwr",
  })
  @post("{id}")
  static createFwr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
