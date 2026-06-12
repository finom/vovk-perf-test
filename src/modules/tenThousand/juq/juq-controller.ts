import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("juq")
export default class JuqController {
  @operation({
    summary: "Get Juq",
  })
  @get()
  static getJuq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Juq",
  })
  @post("{id}")
  static createJuq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
