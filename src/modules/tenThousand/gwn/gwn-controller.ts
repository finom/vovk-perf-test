import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gwn")
export default class GwnController {
  @operation({
    summary: "Get Gwn",
  })
  @get()
  static getGwn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gwn",
  })
  @post("{id}")
  static createGwn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
