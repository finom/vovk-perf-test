import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ela")
export default class ElaController {
  @operation({
    summary: "Get Ela",
  })
  @get()
  static getEla = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ela",
  })
  @post("{id}")
  static createEla = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
