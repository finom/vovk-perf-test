import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("avo")
export default class AvoController {
  @operation({
    summary: "Get Avo",
  })
  @get()
  static getAvo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Avo",
  })
  @post("{id}")
  static createAvo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
