import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("evv")
export default class EvvController {
  @operation({
    summary: "Get Evv",
  })
  @get()
  static getEvv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Evv",
  })
  @post("{id}")
  static createEvv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
