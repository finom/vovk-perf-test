import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("agh")
export default class AghController {
  @operation({
    summary: "Get Agh",
  })
  @get()
  static getAgh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Agh",
  })
  @post("{id}")
  static createAgh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
