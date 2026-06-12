import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("evj")
export default class EvjController {
  @operation({
    summary: "Get Evj",
  })
  @get()
  static getEvj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Evj",
  })
  @post("{id}")
  static createEvj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
