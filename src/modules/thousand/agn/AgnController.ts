import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("agn")
export default class AgnController {
  @operation({
    summary: "Get Agn",
  })
  @get()
  static getAgn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Agn",
  })
  @post("{id}")
  static createAgn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
