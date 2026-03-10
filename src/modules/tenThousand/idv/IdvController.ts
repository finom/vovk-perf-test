import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("idv")
export default class IdvController {
  @operation({
    summary: "Get Idv",
  })
  @get()
  static getIdv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Idv",
  })
  @post("{id}")
  static createIdv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
