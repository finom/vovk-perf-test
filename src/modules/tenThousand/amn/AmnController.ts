import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("amn")
export default class AmnController {
  @operation({
    summary: "Get Amn",
  })
  @get()
  static getAmn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Amn",
  })
  @post("{id}")
  static createAmn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
