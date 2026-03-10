import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eid")
export default class EidController {
  @operation({
    summary: "Get Eid",
  })
  @get()
  static getEid = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eid",
  })
  @post("{id}")
  static createEid = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
