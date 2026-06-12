import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aos")
export default class AosController {
  @operation({
    summary: "Get Aos",
  })
  @get()
  static getAos = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aos",
  })
  @post("{id}")
  static createAos = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
