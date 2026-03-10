import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dka")
export default class DkaController {
  @operation({
    summary: "Get Dka",
  })
  @get()
  static getDka = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dka",
  })
  @post("{id}")
  static createDka = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
