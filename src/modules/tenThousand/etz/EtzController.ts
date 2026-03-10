import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("etz")
export default class EtzController {
  @operation({
    summary: "Get Etz",
  })
  @get()
  static getEtz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Etz",
  })
  @post("{id}")
  static createEtz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
