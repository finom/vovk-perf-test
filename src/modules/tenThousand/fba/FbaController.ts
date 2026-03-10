import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fba")
export default class FbaController {
  @operation({
    summary: "Get Fba",
  })
  @get()
  static getFba = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fba",
  })
  @post("{id}")
  static createFba = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
