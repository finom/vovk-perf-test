import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("evf")
export default class EvfController {
  @operation({
    summary: "Get Evf",
  })
  @get()
  static getEvf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Evf",
  })
  @post("{id}")
  static createEvf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
