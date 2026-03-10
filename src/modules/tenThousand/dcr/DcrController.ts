import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dcr")
export default class DcrController {
  @operation({
    summary: "Get Dcr",
  })
  @get()
  static getDcr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dcr",
  })
  @post("{id}")
  static createDcr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
