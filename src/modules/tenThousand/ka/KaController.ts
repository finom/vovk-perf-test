import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ka")
export default class KaController {
  @operation({
    summary: "Get Ka",
  })
  @get()
  static getKa = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ka",
  })
  @post("{id}")
  static createKa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
