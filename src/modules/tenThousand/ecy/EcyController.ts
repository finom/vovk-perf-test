import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ecy")
export default class EcyController {
  @operation({
    summary: "Get Ecy",
  })
  @get()
  static getEcy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ecy",
  })
  @post("{id}")
  static createEcy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
