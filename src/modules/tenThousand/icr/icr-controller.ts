import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("icr")
export default class IcrController {
  @operation({
    summary: "Get Icr",
  })
  @get()
  static getIcr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Icr",
  })
  @post("{id}")
  static createIcr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
