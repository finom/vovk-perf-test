import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("evp")
export default class EvpController {
  @operation({
    summary: "Get Evp",
  })
  @get()
  static getEvp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Evp",
  })
  @post("{id}")
  static createEvp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
