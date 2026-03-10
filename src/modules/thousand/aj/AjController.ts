import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aj")
export default class AjController {
  @operation({
    summary: "Get Aj",
  })
  @get()
  static getAj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aj",
  })
  @post("{id}")
  static createAj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
