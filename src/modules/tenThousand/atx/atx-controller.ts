import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("atx")
export default class AtxController {
  @operation({
    summary: "Get Atx",
  })
  @get()
  static getAtx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Atx",
  })
  @post("{id}")
  static createAtx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
