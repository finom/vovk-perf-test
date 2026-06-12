import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ceo")
export default class CeoController {
  @operation({
    summary: "Get Ceo",
  })
  @get()
  static getCeo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ceo",
  })
  @post("{id}")
  static createCeo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
