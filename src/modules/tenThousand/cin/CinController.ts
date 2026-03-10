import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cin")
export default class CinController {
  @operation({
    summary: "Get Cin",
  })
  @get()
  static getCin = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cin",
  })
  @post("{id}")
  static createCin = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
