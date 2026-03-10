import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nfo")
export default class NfoController {
  @operation({
    summary: "Get Nfo",
  })
  @get()
  static getNfo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nfo",
  })
  @post("{id}")
  static createNfo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
