import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ipi")
export default class IpiController {
  @operation({
    summary: "Get Ipi",
  })
  @get()
  static getIpi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ipi",
  })
  @post("{id}")
  static createIpi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
