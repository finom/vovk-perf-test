import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fon")
export default class FonController {
  @operation({
    summary: "Get Fon",
  })
  @get()
  static getFon = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fon",
  })
  @post("{id}")
  static createFon = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
