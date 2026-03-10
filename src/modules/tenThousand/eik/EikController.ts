import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eik")
export default class EikController {
  @operation({
    summary: "Get Eik",
  })
  @get()
  static getEik = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eik",
  })
  @post("{id}")
  static createEik = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
