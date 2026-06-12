import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bzo")
export default class BzoController {
  @operation({
    summary: "Get Bzo",
  })
  @get()
  static getBzo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bzo",
  })
  @post("{id}")
  static createBzo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
