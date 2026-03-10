import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("emw")
export default class EmwController {
  @operation({
    summary: "Get Emw",
  })
  @get()
  static getEmw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Emw",
  })
  @post("{id}")
  static createEmw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
