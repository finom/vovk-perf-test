import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kbe")
export default class KbeController {
  @operation({
    summary: "Get Kbe",
  })
  @get()
  static getKbe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kbe",
  })
  @post("{id}")
  static createKbe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
