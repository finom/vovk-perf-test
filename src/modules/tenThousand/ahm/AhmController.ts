import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ahm")
export default class AhmController {
  @operation({
    summary: "Get Ahm",
  })
  @get()
  static getAhm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ahm",
  })
  @post("{id}")
  static createAhm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
