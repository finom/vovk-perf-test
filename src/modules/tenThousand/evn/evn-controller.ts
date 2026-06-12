import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("evn")
export default class EvnController {
  @operation({
    summary: "Get Evn",
  })
  @get()
  static getEvn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Evn",
  })
  @post("{id}")
  static createEvn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
