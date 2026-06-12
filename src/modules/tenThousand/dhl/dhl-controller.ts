import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dhl")
export default class DhlController {
  @operation({
    summary: "Get Dhl",
  })
  @get()
  static getDhl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dhl",
  })
  @post("{id}")
  static createDhl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
