import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("d")
export default class DController {
  @operation({
    summary: "Get D",
  })
  @get()
  static getD = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create D",
  })
  @post("{id}")
  static createD = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
