import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("atv")
export default class AtvController {
  @operation({
    summary: "Get Atv",
  })
  @get()
  static getAtv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Atv",
  })
  @post("{id}")
  static createAtv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
