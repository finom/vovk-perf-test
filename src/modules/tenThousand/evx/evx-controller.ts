import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("evx")
export default class EvxController {
  @operation({
    summary: "Get Evx",
  })
  @get()
  static getEvx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Evx",
  })
  @post("{id}")
  static createEvx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
