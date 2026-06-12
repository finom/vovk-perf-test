import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("evq")
export default class EvqController {
  @operation({
    summary: "Get Evq",
  })
  @get()
  static getEvq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Evq",
  })
  @post("{id}")
  static createEvq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
