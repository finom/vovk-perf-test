import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aur")
export default class AurController {
  @operation({
    summary: "Get Aur",
  })
  @get()
  static getAur = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aur",
  })
  @post("{id}")
  static createAur = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
