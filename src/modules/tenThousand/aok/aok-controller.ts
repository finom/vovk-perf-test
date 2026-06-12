import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aok")
export default class AokController {
  @operation({
    summary: "Get Aok",
  })
  @get()
  static getAok = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aok",
  })
  @post("{id}")
  static createAok = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
