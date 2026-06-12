import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ika")
export default class IkaController {
  @operation({
    summary: "Get Ika",
  })
  @get()
  static getIka = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ika",
  })
  @post("{id}")
  static createIka = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
