import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cra")
export default class CraController {
  @operation({
    summary: "Get Cra",
  })
  @get()
  static getCra = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cra",
  })
  @post("{id}")
  static createCra = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
