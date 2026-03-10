import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dov")
export default class DovController {
  @operation({
    summary: "Get Dov",
  })
  @get()
  static getDov = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dov",
  })
  @post("{id}")
  static createDov = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
