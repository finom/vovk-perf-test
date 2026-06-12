import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("akr")
export default class AkrController {
  @operation({
    summary: "Get Akr",
  })
  @get()
  static getAkr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Akr",
  })
  @post("{id}")
  static createAkr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
