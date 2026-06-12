import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("naw")
export default class NawController {
  @operation({
    summary: "Get Naw",
  })
  @get()
  static getNaw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Naw",
  })
  @post("{id}")
  static createNaw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
