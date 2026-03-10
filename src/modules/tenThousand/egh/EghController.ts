import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("egh")
export default class EghController {
  @operation({
    summary: "Get Egh",
  })
  @get()
  static getEgh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Egh",
  })
  @post("{id}")
  static createEgh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
