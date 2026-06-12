import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kgt")
export default class KgtController {
  @operation({
    summary: "Get Kgt",
  })
  @get()
  static getKgt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kgt",
  })
  @post("{id}")
  static createKgt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
