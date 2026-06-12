import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hja")
export default class HjaController {
  @operation({
    summary: "Get Hja",
  })
  @get()
  static getHja = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hja",
  })
  @post("{id}")
  static createHja = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
