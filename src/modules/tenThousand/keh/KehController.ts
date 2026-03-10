import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("keh")
export default class KehController {
  @operation({
    summary: "Get Keh",
  })
  @get()
  static getKeh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Keh",
  })
  @post("{id}")
  static createKeh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
