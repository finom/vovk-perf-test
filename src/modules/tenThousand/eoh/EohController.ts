import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eoh")
export default class EohController {
  @operation({
    summary: "Get Eoh",
  })
  @get()
  static getEoh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eoh",
  })
  @post("{id}")
  static createEoh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
