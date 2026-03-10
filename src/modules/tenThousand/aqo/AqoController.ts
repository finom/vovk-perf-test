import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aqo")
export default class AqoController {
  @operation({
    summary: "Get Aqo",
  })
  @get()
  static getAqo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aqo",
  })
  @post("{id}")
  static createAqo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
