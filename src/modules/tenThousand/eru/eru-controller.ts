import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eru")
export default class EruController {
  @operation({
    summary: "Get Eru",
  })
  @get()
  static getEru = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eru",
  })
  @post("{id}")
  static createEru = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
