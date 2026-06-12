import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("alc")
export default class AlcController {
  @operation({
    summary: "Get Alc",
  })
  @get()
  static getAlc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Alc",
  })
  @post("{id}")
  static createAlc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
