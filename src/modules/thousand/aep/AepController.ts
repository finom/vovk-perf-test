import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aep")
export default class AepController {
  @operation({
    summary: "Get Aep",
  })
  @get()
  static getAep = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aep",
  })
  @post("{id}")
  static createAep = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
