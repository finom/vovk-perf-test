import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ews")
export default class EwsController {
  @operation({
    summary: "Get Ews",
  })
  @get()
  static getEws = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ews",
  })
  @post("{id}")
  static createEws = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
