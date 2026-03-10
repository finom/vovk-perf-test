import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hxa")
export default class HxaController {
  @operation({
    summary: "Get Hxa",
  })
  @get()
  static getHxa = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hxa",
  })
  @post("{id}")
  static createHxa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
