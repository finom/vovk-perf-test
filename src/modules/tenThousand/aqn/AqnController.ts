import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aqn")
export default class AqnController {
  @operation({
    summary: "Get Aqn",
  })
  @get()
  static getAqn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aqn",
  })
  @post("{id}")
  static createAqn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
