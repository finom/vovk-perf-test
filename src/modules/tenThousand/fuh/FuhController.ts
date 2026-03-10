import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fuh")
export default class FuhController {
  @operation({
    summary: "Get Fuh",
  })
  @get()
  static getFuh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fuh",
  })
  @post("{id}")
  static createFuh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
