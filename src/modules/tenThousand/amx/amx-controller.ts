import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("amx")
export default class AmxController {
  @operation({
    summary: "Get Amx",
  })
  @get()
  static getAmx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Amx",
  })
  @post("{id}")
  static createAmx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
