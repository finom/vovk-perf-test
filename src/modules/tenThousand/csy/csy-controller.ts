import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("csy")
export default class CsyController {
  @operation({
    summary: "Get Csy",
  })
  @get()
  static getCsy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Csy",
  })
  @post("{id}")
  static createCsy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
