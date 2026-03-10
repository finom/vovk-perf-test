import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("edi")
export default class EdiController {
  @operation({
    summary: "Get Edi",
  })
  @get()
  static getEdi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Edi",
  })
  @post("{id}")
  static createEdi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
