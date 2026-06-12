import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ebr")
export default class EbrController {
  @operation({
    summary: "Get Ebr",
  })
  @get()
  static getEbr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ebr",
  })
  @post("{id}")
  static createEbr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
