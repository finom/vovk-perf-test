import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("akz")
export default class AkzController {
  @operation({
    summary: "Get Akz",
  })
  @get()
  static getAkz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Akz",
  })
  @post("{id}")
  static createAkz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
