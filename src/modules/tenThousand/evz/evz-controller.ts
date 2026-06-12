import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("evz")
export default class EvzController {
  @operation({
    summary: "Get Evz",
  })
  @get()
  static getEvz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Evz",
  })
  @post("{id}")
  static createEvz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
