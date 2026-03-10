import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hfo")
export default class HfoController {
  @operation({
    summary: "Get Hfo",
  })
  @get()
  static getHfo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hfo",
  })
  @post("{id}")
  static createHfo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
